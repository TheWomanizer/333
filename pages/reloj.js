"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import NeonName from "../components/NeonName";
import Menu333 from "../components/Menu333";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "@fontsource/emblema-one";
import "@fontsource/dosis";

export default function ClockPage() {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [easterEggMode, setEasterEggMode] = useState("world"); // world, pomodoro, timer, alarm, stopwatch
  const [isFlashing, setIsFlashing] = useState(false);
  
  // Estados del Easter Egg
  const [worldClocks] = useState([
    { city: "Medellín", timezone: "America/Bogota", flag: "🇨🇴" },
    { city: "Nueva York", timezone: "America/New_York", flag: "🇺🇸" },
    { city: "Londres", timezone: "Europe/London", flag: "🇬🇧" },
    { city: "París", timezone: "Europe/Paris", flag: "🇫🇷" },
    { city: "Tokio", timezone: "Asia/Tokyo", flag: "🇯🇵" },
    { city: "Sídney", timezone: "Australia/Sydney", flag: "🇦🇺" },
    { city: "Moscú", timezone: "Europe/Moscow", flag: "🇷🇺" },
    { city: "Los Ángeles", timezone: "America/Los_Angeles", flag: "🇺🇸" }
  ]);

  // Estados Pomodoro
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutos
  const [pomodoroIsRunning, setPomodoroIsRunning] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState("work"); // work, break, longBreak

  // Estados Timer
  const [timerMinutes, setTimerMinutes] = useState(5);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [timerTime, setTimerTime] = useState(5 * 60);

  // Estados Alarma
  const [alarmTime, setAlarmTime] = useState("07:00");
  const [alarmIsSet, setAlarmIsSet] = useState(false);
  const [alarmRinging, setAlarmRinging] = useState(false);

  // Estados Cronómetro
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const [stopwatchLaps, setStopwatchLaps] = useState([]);

  const controls = useAnimation();
  const clickTimeoutRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Timer effects
  useEffect(() => {
    let interval = null;
    if (pomodoroIsRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime(time => time - 1);
      }, 1000);
    } else if (pomodoroTime === 0) {
      triggerFlash();
      setPomodoroIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [pomodoroIsRunning, pomodoroTime]);

  useEffect(() => {
    let interval = null;
    if (timerIsRunning && timerTime > 0) {
      interval = setInterval(() => {
        setTimerTime(time => time - 1);
      }, 1000);
    } else if (timerTime === 0) {
      triggerFlash();
      setTimerIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerIsRunning, timerTime]);

  useEffect(() => {
    let interval = null;
    if (stopwatchIsRunning) {
      interval = setInterval(() => {
        setStopwatchTime(time => time + 1);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [stopwatchIsRunning]);

  // Alarma check
  useEffect(() => {
    if (alarmIsSet) {
      const now = currentTime.toTimeString().substring(0, 5);
      if (now === alarmTime && !alarmRinging) {
        setAlarmRinging(true);
        triggerFlash();
      }
    }
  }, [currentTime, alarmTime, alarmIsSet, alarmRinging]);

  const triggerFlash = useCallback(() => {
    setIsFlashing(true);
    let flashCount = 0;
    const flashInterval = setInterval(() => {
      flashCount++;
      if (flashCount >= 6) { // 3 flashes (on-off-on-off-on-off)
        clearInterval(flashInterval);
        setIsFlashing(false);
      }
    }, 300);
  }, []);

  const handleDateClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    if (clickCount + 1 === 3) {
      setShowEasterEgg(true);
      setClickCount(0);
    } else {
      clickTimeoutRef.current = setTimeout(() => {
        setClickCount(0);
      }, 1000);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatStopwatch = (centiseconds) => {
    const minutes = Math.floor(centiseconds / 6000);
    const seconds = Math.floor((centiseconds % 6000) / 100);
    const cs = centiseconds % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${cs.toString().padStart(2, '0')}`;
  };

  const resetPomodoro = () => {
    setPomodoroTime(pomodoroMode === "work" ? 25 * 60 : pomodoroMode === "break" ? 5 * 60 : 15 * 60);
    setPomodoroIsRunning(false);
  };

  const resetTimer = () => {
    setTimerTime(timerMinutes * 60 + timerSeconds);
    setTimerIsRunning(false);
  };

  const resetStopwatch = () => {
    setStopwatchTime(0);
    setStopwatchIsRunning(false);
    setStopwatchLaps([]);
  };

  const addLap = () => {
    setStopwatchLaps(prev => [...prev, stopwatchTime]);
  };

  const formattedTime = currentTime.toLocaleTimeString(undefined, { hour12: false });
  const formattedDate = currentTime.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  if (showEasterEgg) {
    return (
      <div className={`min-h-screen bg-black text-white relative overflow-hidden ${isFlashing ? 'bg-white' : ''}`}>
        <Menu333 />
        
        {/* Flash overlay */}
        {isFlashing && (
          <motion.div
            className="fixed inset-0 bg-white z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, repeat: 2 }}
          />
        )}

        <div className="pt-24 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-purple-400 text-3xl font-bold mb-4" style={{ fontFamily: "Emblema One, sans-serif" }}>
                🕐 TEMPORAL NEXUS 🕐
              </h1>
              <p className="text-purple-200" style={{ fontFamily: "Dosis, sans-serif" }}>
                Herramientas del tiempo y la productividad
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { key: "world", icon: "🌍", label: "Mundo" },
                { key: "pomodoro", icon: "🍅", label: "Pomodoro" },
                { key: "timer", icon: "⏰", label: "Timer" },
                { key: "alarm", icon: "⏰", label: "Alarma" },
                { key: "stopwatch", icon: "⏱️", label: "Cronómetro" }
              ].map(({ key, icon, label }) => (
                <button
                  key={key}
                  onClick={() => setEasterEggMode(key)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                    easterEggMode === key
                      ? "bg-purple-600 text-white"
                      : "bg-purple-900/30 text-purple-300 hover:bg-purple-800/50"
                  }`}
                  style={{ fontFamily: "Dosis, sans-serif" }}
                >
                  {icon} {label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/30 rounded-2xl p-6">
              
              {/* World Clocks */}
              {easterEggMode === "world" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {worldClocks.map((clock, index) => {
                    const time = new Date().toLocaleTimeString("en-US", {
                      timeZone: clock.timezone,
                      hour12: false
                    });
                    return (
                      <motion.div
                        key={clock.city}
                        className="bg-purple-900/30 rounded-xl p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-3xl mb-2">{clock.flag}</div>
                        <h3 className="text-purple-200 font-bold mb-2" style={{ fontFamily: "Emblema One, sans-serif" }}>
                          {clock.city}
                        </h3>
                        <div className="text-purple-100 text-xl font-mono">
                          {time}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Pomodoro */}
              {easterEggMode === "pomodoro" && (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="flex justify-center gap-4 mb-4">
                      {[
                        { key: "work", label: "Trabajo", time: 25 },
                        { key: "break", label: "Descanso", time: 5 },
                        { key: "longBreak", label: "Descanso Largo", time: 15 }
                      ].map(({ key, label, time }) => (
                        <button
                          key={key}
                          onClick={() => {
                            setPomodoroMode(key);
                            setPomodoroTime(time * 60);
                            setPomodoroIsRunning(false);
                          }}
                          className={`px-4 py-2 rounded-lg ${
                            pomodoroMode === key ? "bg-purple-600" : "bg-purple-900/30"
                          }`}
                          style={{ fontFamily: "Dosis, sans-serif" }}
                        >
                          {label} ({time}m)
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-6xl font-mono mb-6 text-purple-200">
                    {formatTime(pomodoroTime)}
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setPomodoroIsRunning(!pomodoroIsRunning)}
                      className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors"
                      style={{ fontFamily: "Dosis, sans-serif" }}
                    >
                      {pomodoroIsRunning ? "⏸️ Pausar" : "▶️ Iniciar"}
                    </button>
                    <button
                      onClick={resetPomodoro}
                      className="px-6 py-3 bg-gray-600 rounded-xl hover:bg-gray-500 transition-colors"
                      style={{ fontFamily: "Dosis, sans-serif" }}
                    >
                      🔄 Reset
                    </button>
                  </div>
                </div>
              )}

              {/* Timer */}
              {easterEggMode === "timer" && (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="flex justify-center gap-4 mb-4">
                      <div>
                        <label className="block text-purple-400 mb-2" style={{ fontFamily: "Dosis, sans-serif" }}>
                          Minutos
                        </label>
                        <input
                          type="number"
                          value={timerMinutes}
                          onChange={(e) => setTimerMinutes(parseInt(e.target.value) || 0)}
                          className="bg-purple-900/30 border border-purple-700 rounded-lg px-3 py-2 text-center w-20"
                          min="0"
                          max="60"
                          disabled={timerIsRunning}
                        />
                      </div>
                      <div>
                        <label className="block text-purple-400 mb-2" style={{ fontFamily: "Dosis, sans-serif" }}>
                          Segundos
                        </label>
                        <input
                          type="number"
                          value={timerSeconds}
                          onChange={(e) => setTimerSeconds(parseInt(e.target.value) || 0)}
                          className="bg-purple-900/30 border border-purple-700 rounded-lg px-3 py-2 text-center w-20"
                          min="0"
                          max="59"
                          disabled={timerIsRunning}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-6xl font-mono mb-6 text-purple-200">
                    {formatTime(timerTime)}
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setTimerIsRunning(!timerIsRunning)}
                      className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors"
                      style={{ fontFamily: "Dosis, sans-serif" }}
                    >
                      {timerIsRunning ? "⏸️ Pausar" : "▶️ Iniciar"}
                    </button>
                    <button
                      onClick={resetTimer}
                      className="px-6 py-3 bg-gray-600 rounded-xl hover:bg-gray-500 transition-colors"
                      style={{ fontFamily: "Dosis, sans-serif" }}
                    >
                      🔄 Reset
                    </button>
                  </div>
                </div>
              )}

              {/* Alarm */}
              {easterEggMode === "alarm" && (
                <div className="text-center">
                  <div className="mb-6">
                    <label className="block text-purple-400 mb-4 text-lg" style={{ fontFamily: "Dosis, sans-serif" }}>
                      Configurar Alarma
                    </label>
                    <input
                      type="time"
                      value={alarmTime}
                      onChange={(e) => setAlarmTime(e.target.value)}
                      className="bg-purple-900/30 border border-purple-700 rounded-lg px-4 py-3 text-2xl text-center"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="text-lg text-purple-200" style={{ fontFamily: "Dosis, sans-serif" }}>
                      Estado: {alarmIsSet ? "🔔 Activada" : "🔕 Desactivada"}
                    </div>
                    {alarmRinging && (
                      <div className="text-red-400 text-xl animate-pulse">
                        🚨 ¡ALARMA SONANDO! 🚨
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setAlarmIsSet(!alarmIsSet)}
                      className={`px-6 py-3 rounded-xl transition-colors ${
                        alarmIsSet ? "bg-red-600 hover:bg-red-500" : "bg-green-600 hover:bg-green-500"
                      }`}
                      style={{ fontFamily: "Dosis, sans-serif" }}
                    >
                      {alarmIsSet ? "🔕 Desactivar" : "🔔 Activar"}
                    </button>
                    {alarmRinging && (
                      <button
                        onClick={() => setAlarmRinging(false)}
                        className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors"
                        style={{ fontFamily: "Dosis, sans-serif" }}
                      >
                        🤫 Silenciar
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Stopwatch */}
              {easterEggMode === "stopwatch" && (
                <div className="text-center">
                  <div className="text-6xl font-mono mb-6 text-purple-200">
                    {formatStopwatch(stopwatchTime)}
                  </div>

                  <div className="flex justify-center gap-4 mb-6">
                    <button
                      onClick={() => setStopwatchIsRunning(!stopwatchIsRunning)}
                      className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors"
                      style={{ fontFamily: "Dosis, sans-serif" }}
                    >
                      {stopwatchIsRunning ? "⏸️ Pausar" : "▶️ Iniciar"}
                    </button>
                    <button
                      onClick={addLap}
                      disabled={!stopwatchIsRunning}
                      className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-50"
                      style={{ fontFamily: "Dosis, sans-serif" }}
                    >
                      🏁 Vuelta
                    </button>
                    <button
                      onClick={resetStopwatch}
                      className="px-6 py-3 bg-gray-600 rounded-xl hover:bg-gray-500 transition-colors"
                      style={{ fontFamily: "Dosis, sans-serif" }}
                    >
                      🔄 Reset
                    </button>
                  </div>

                  {/* Laps */}
                  {stopwatchLaps.length > 0 && (
                    <div className="bg-purple-900/30 rounded-xl p-4 max-h-40 overflow-y-auto">
                      <h3 className="text-purple-400 mb-3" style={{ fontFamily: "Emblema One, sans-serif" }}>
                        Vueltas
                      </h3>
                      {stopwatchLaps.map((lapTime, index) => (
                        <div key={index} className="flex justify-between text-purple-200 py-1">
                          <span>Vuelta {index + 1}</span>
                          <span className="font-mono">{formatStopwatch(lapTime)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Exit Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => setShowEasterEgg(false)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl hover:from-purple-500 hover:to-purple-400 transition-all duration-300"
                style={{ fontFamily: "Dosis, sans-serif" }}
              >
                🚪 Volver al Reloj Normal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden ${isFlashing ? 'bg-white' : ''}`}>
      
      {/* Flash overlay */}
      {isFlashing && (
        <motion.div
          className="fixed inset-0 bg-white z-[200]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.3, repeat: 2 }}
        />
      )}

      {/* NeonName reducido como botón Home */}
      <div className="absolute top-4 left-4 z-50">
        <NeonName />
      </div>

      {/* Fondo de nebulosa animada */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `url('/textures/nebula-purple.png')`,
          backgroundSize: "200% 200%",
          backgroundRepeat: "no-repeat",
          opacity: 0.12,
          filter: "blur(12px)",
        }}
      />

      {/* Hora gigante con pulso sutil */}
      <motion.h1
        className="z-10 text-[clamp(42px,10vw,180px)] font-bold tracking-widest text-center text-purple-200"
        style={{ fontFamily: "Emblema One, sans-serif" }}
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {formattedTime}
      </motion.h1>

      {/* Fecha numérica con neón discreto - CLICKEABLE PARA EASTER EGG */}
      <motion.div
        className="z-10 mt-2 text-xs text-center text-[#b084f6] cursor-pointer hover:text-purple-300 transition-colors"
        style={{
          fontFamily: "Emblema One, sans-serif",
          textShadow: "0 0 3px #a855f7, 0 0 5px #9333ea",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        onClick={handleDateClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {formattedDate}
        {clickCount > 0 && (
          <motion.div 
            className="text-purple-400 text-xs mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {clickCount}/3 clicks
          </motion.div>
        )}
      </motion.div>

      {/* Hint sutil */}
      <motion.div
        className="absolute bottom-8 text-purple-500/50 text-xs"
        style={{ fontFamily: "Dosis, sans-serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ delay: 5, duration: 3, repeat: Infinity, repeatDelay: 10 }}
      >
        💡 Haz click 3 veces en la fecha...
      </motion.div>
    </div>
  );
}