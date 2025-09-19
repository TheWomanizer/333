// hooks/useVscoGallery.js
import { useState, useEffect } from 'react';

export const useVscoGallery = (username = 'micuentaprincipal') => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Función para obtener datos reales de VSCO
  const fetchVscoPhotos = async () => {
    try {
      setLoading(true);
      setError(null);

      // Método 1: Intentar scraping real de VSCO
      try {
        const realVscoPhotos = await scrapeVscoProfile(username);
        if (realVscoPhotos && realVscoPhotos.length > 0) {
          setPhotos(realVscoPhotos);
          setLastUpdated(new Date().toISOString());
          return;
        }
      } catch (err) {
        console.warn('Real VSCO scraping failed:', err.message);
      }

      // Método 2: Fallback con API proxy (CORS-enabled)
      try {
        const proxyVscoPhotos = await fetchVscoViaProxy(username);
        if (proxyVscoPhotos && proxyVscoPhotos.length > 0) {
          setPhotos(proxyVscoPhotos);
          setLastUpdated(new Date().toISOString());
          return;
        }
      } catch (err) {
        console.warn('Proxy VSCO API failed:', err.message);
      }

      // Si todo falla, mostrar mensaje de error
      throw new Error('No se pudieron cargar las fotos de VSCO. Verifica que el perfil sea público.');

    } catch (err) {
      console.error('Error fetching VSCO photos:', err);
      setError(err.message);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  // Función para hacer scraping real del perfil VSCO
  const scrapeVscoProfile = async (username) => {
    try {
      // Paso 1: Obtener el site ID del usuario
      const siteId = await getVscoSiteId(username);
      if (!siteId) {
        throw new Error('No se pudo obtener el site ID del usuario');
      }

      // Paso 2: Obtener las fotos usando la API interna de VSCO
      const photosData = await fetchVscoMedias(siteId);

      return photosData;
    } catch (error) {
      console.error('Error in scrapeVscoProfile:', error);
      throw error;
    }
  };

  // Función para obtener el site ID de un usuario de VSCO
  const getVscoSiteId = async (username) => {
    try {
      // Método 1: Intentar con la página del perfil
      const profileResponse = await fetch(`https://vsco.co/${username}`, {
        mode: 'cors',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      if (!profileResponse.ok) {
        throw new Error(`Perfil no encontrado: ${profileResponse.status}`);
      }

      const html = await profileResponse.text();

      // Buscar el site ID en el HTML o en el __PRELOADED_STATE__
      const siteIdMatch = html.match(/"siteId":"([^"]+)"/);
      if (siteIdMatch) {
        return siteIdMatch[1];
      }

      // Método alternativo: buscar en window.__PRELOADED_STATE__
      const preloadedMatch = html.match(/window\.__PRELOADED_STATE__\s*=\s*({.+?});/);
      if (preloadedMatch) {
        try {
          const preloadedState = JSON.parse(preloadedMatch[1]);
          const siteId = preloadedState?.sites?.siteId ||
                        preloadedState?.user?.siteId ||
                        preloadedState?.entities?.sites?.[Object.keys(preloadedState.entities?.sites || {})[0]]?.id;
          if (siteId) return siteId;
        } catch (e) {
          console.warn('Error parsing preloaded state:', e);
        }
      }

      throw new Error('Site ID no encontrado en la página del perfil');
    } catch (error) {
      console.error('Error getting site ID:', error);
      throw error;
    }
  };

  // Función para obtener fotos usando la API interna de VSCO
  const fetchVscoMedias = async (siteId) => {
    try {
      const response = await fetch(`https://vsco.co/api/3.0/medias/profile?site_id=${siteId}&limit=50`, {
        mode: 'cors',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/json',
          'Referer': 'https://vsco.co/'
        }
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      // Procesar los datos de las fotos
      return processVscoMediaData(data);
    } catch (error) {
      console.error('Error fetching medias:', error);
      throw error;
    }
  };

  // Función para procesar los datos de media de VSCO
  const processVscoMediaData = (data) => {
    if (!data || !data.media) {
      return [];
    }

    return data.media.map((item, index) => {
      // Extraer información de la imagen
      const imageUrl = item.responsive_url || item.image || item.image_meta?.responsive_url;
      const thumbnailUrl = item.image_meta?.thumbnail_url || imageUrl;

      return {
        id: `vsco_real_${item.id || index}`,
        title: item.caption || item.description || `Foto ${index + 1}`,
        description: item.caption || item.description || 'Foto capturada y compartida en VSCO',
        date: item.upload_date || item.created_date || new Date().toISOString(),
        category: categorizeVscoPhoto(item),
        location: item.location_name || 'Ubicación no especificada',
        camera: extractCameraInfo(item),
        settings: extractCameraSettings(item),
        src: imageUrl,
        thumbnail: thumbnailUrl,
        tags: extractTags(item),
        vscoData: {
          isFromVsco: true,
          likes: item.likes_count || 0,
          views: item.views_count || 0,
          vscoUrl: `https://vsco.co/${username}/media/${item.id}`,
          filter: item.preset_name || item.filter_name || null,
          dateUploaded: item.upload_date || item.created_date
        }
      };
    });
  };

  // Función para categorizar fotos basándose en metadatos
  const categorizeVscoPhoto = (item) => {
    const caption = (item.caption || '').toLowerCase();
    const tags = (item.tags || []).map(tag => tag.toLowerCase());

    if (caption.includes('urban') || caption.includes('city') || tags.includes('urban')) return 'Urbana';
    if (caption.includes('macro') || caption.includes('close') || tags.includes('macro')) return 'Macro';
    if (caption.includes('abstract') || tags.includes('abstract')) return 'Abstracta';
    if (caption.includes('portrait') || tags.includes('portrait')) return 'Retrato';
    if (caption.includes('night') || caption.includes('noche') || tags.includes('night')) return 'Nocturna';
    if (caption.includes('spiritual') || caption.includes('meditation') || tags.includes('spiritual')) return 'Espiritual';
    if (caption.includes('lifestyle') || caption.includes('daily') || tags.includes('lifestyle')) return 'Lifestyle';

    return 'Urbana'; // Categoría por defecto
  };

  // Función para extraer información de cámara
  const extractCameraInfo = (item) => {
    return item.camera_make && item.camera_model
      ? `${item.camera_make} ${item.camera_model}`
      : item.camera_model || 'Cámara no especificada';
  };

  // Función para extraer configuraciones de cámara
  const extractCameraSettings = (item) => {
    const settings = [];
    if (item.aperture) settings.push(`f/${item.aperture}`);
    if (item.shutter_speed) settings.push(`${item.shutter_speed}s`);
    if (item.iso) settings.push(`ISO ${item.iso}`);

    return settings.length > 0 ? settings.join(' | ') : 'Configuración no disponible';
  };

  // Función para extraer tags
  const extractTags = (item) => {
    const tags = [];
    if (item.tags) tags.push(...item.tags);
    if (item.caption) {
      const hashtagMatches = item.caption.match(/#\w+/g);
      if (hashtagMatches) {
        tags.push(...hashtagMatches.map(tag => tag.replace('#', '')));
      }
    }
    return tags.slice(0, 10); // Limitar a 10 tags
  };

  // Función proxy alternativa (CORS-enabled)
  const fetchVscoViaProxy = async (username) => {
    try {
      // Usar un servicio proxy para evitar CORS
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://vsco.co/${username}/gallery`)}`;

      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error(`Proxy request failed: ${response.status}`);
      }

      const data = await response.json();
      const html = data.contents;

      // Buscar datos en el HTML
      const preloadedMatch = html.match(/window\.__PRELOADED_STATE__\s*=\s*({.+?});/);
      if (!preloadedMatch) {
        throw new Error('No preloaded state found');
      }

      const preloadedState = JSON.parse(preloadedMatch[1]);

      // Extraer fotos del estado precargado
      return extractPhotosFromPreloadedState(preloadedState, username);
    } catch (error) {
      console.error('Error with proxy method:', error);
      throw error;
    }
  };

  // Función para extraer fotos del estado precargado
  const extractPhotosFromPreloadedState = (state, username) => {
    const photos = [];

    // Buscar en diferentes ubicaciones del estado
    const medias = state.entities?.medias || {};

    Object.values(medias).forEach((media, index) => {
      if (media.image) {
        photos.push({
          id: `vsco_preloaded_${media.id || index}`,
          title: media.caption || `Foto ${index + 1}`,
          description: media.caption || 'Foto de VSCO',
          date: media.upload_date || new Date().toISOString(),
          category: categorizeVscoPhoto(media),
          location: media.location_name || 'Ubicación no especificada',
          camera: extractCameraInfo(media),
          settings: extractCameraSettings(media),
          src: media.responsive_url || media.image,
          thumbnail: media.image,
          tags: extractTags(media),
          vscoData: {
            isFromVsco: true,
            likes: media.likes_count || 0,
            views: media.views_count || 0,
            vscoUrl: `https://vsco.co/${username}/media/${media.id}`,
            filter: media.preset_name || null,
            dateUploaded: media.upload_date
          }
        });
      }
    });

    return photos;
  };

  // Función para mapear fotos a formato de galería
  const mapToGalleryFormat = (photo) => {
    return {
      id: photo.id,
      title: photo.title,
      description: photo.description,
      date: photo.date,
      category: photo.category,
      location: photo.location,
      camera: photo.camera,
      settings: photo.settings,
      src: photo.src,
      thumbnail: photo.thumbnail || photo.src,
      tags: photo.tags,
      // Datos adicionales de VSCO
      vscoData: photo.vscoData
    };
  };

  useEffect(() => {
    fetchVscoPhotos();
  }, [username]);

  // Convertir fotos a formato de galería
  const galleryPhotos = photos.map(mapToGalleryFormat);

  return {
    photos: galleryPhotos,
    loading,
    error,
    lastUpdated,
    refetch: fetchVscoPhotos
  };
};