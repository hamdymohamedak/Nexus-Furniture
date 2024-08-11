// LaRose is a Library was built with "Hamdy Mohamed Askander" 
// for More About Team Visit website =>  https://askander.vercel.app
// Happy Hacking (˶ˆᗜˆ˵)

import React, { useEffect, useState } from 'react';
export function Ak_Alert({ title, time, JSX }) {
  const [display, setDisplay] = useState("flex");


  useEffect(() => {
    if (time === Infinity) {
      setDisplay("flex");
      return;
    }

    const timer = setTimeout(() => {
      setDisplay("none");
    }, time);
    return () => clearTimeout(timer);
  }, [time]);
  const styles = {
    info: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      width: "20rem",
      padding: "0.75rem",
      display: display,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      background: "#509AF8",
      borderRadius: "8px",
      boxShadow: "0px 0px 5px -3px #111",
      position: "relative" // Add position relative to properly position the close button
    },
    infoIcon: {
      width: "20px",
      height: "20px",
      transform: "translateY(-2px)",
      marginRight: "8px"
    },
    infoTitle: {
      fontWeight: 500,
      fontSize: "1rem",
      color: "#fff",

    },
    infoClose: {
      width: "1.1rem",
      height: "1.1rem",
      cursor: "pointer",
      marginLeft: "auto",
      position: "absolute", // Position close button to the right of the alert
      right: "0.9rem",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };

  const handleClose = () => {
    setDisplay("none");
  };

  return (
    <div style={styles.info}>
      <div style={styles.infoIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          viewBox="0 0 24 24"
          height={24}
          fill="none"
        >
          <path
            fill="#fff"
            d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
          />
        </svg>
      </div>
      <div style={styles.infoTitle}>{title}</div>
      <div onClick={handleClose} style={styles.infoClose}>
        <svg
          height={20}
          viewBox="0 0 20 20"
          width={20}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            fill="#fff"
          />
        </svg>
      </div>
      <div style={{ marginLeft: "1rem" }}>{JSX}</div>
    </div>
  );
}

export function Button({ h, w, event }) {
  const [hover, setHover] = useState(false);

  const baseStyle = {
    height: `${h}rem`,
    width: `${w}rem`,
    backgroundImage:
      "linear-gradient(to right, #e52d27 0%, #b31217 51%, #e52d27 100%)",
    margin: "0.9rem",
    padding: "1rem 2.2rem",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    border: "none"
  };

  const hoverStyle = {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  };

  const combinedStyle = hover ? { ...baseStyle, ...hoverStyle } : baseStyle;

  let handleEvent = () => {
    if (typeof event === "function") {
      event();
    }
  };

  return (
    <button
      style={combinedStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleEvent}
    >
      button
    </button>
  );
}




export function CounterUp({ start, end, time, size, weight }) {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    if (number < end) {
      const timer = setTimeout(() => {
        setNumber(prevNumber => prevNumber + 1);
      }, time);

      return () => clearTimeout(timer);
    }
  }, [number, end, time]);

  useEffect(() => {
    setNumber(start);
  }, [start]);

  return (
    <div style={{ fontSize: `${size}rem`, fontWeight: `${weight}` }}>{number}</div>
  );
}

export function CounterDown({ start, end, time, size }) {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    if (number > end) {
      const timer = setTimeout(() => {
        setNumber(prevNumber => prevNumber - 1);
      }, time * 1000); // time is in seconds, so convert to milliseconds

      return () => clearTimeout(timer);
    }
  }, [number, end, time]);

  useEffect(() => {
    setNumber(start);
  }, [start]);

  return (
    <div style={{ fontSize: `${size}rem` }}>{number}</div>
  );
}


export function ModernBtn({ title, allColor, fontSize, color, hoverColor, clickEvent, h = "4", w = "11" }) {

  let handleClick = () => {
    if (typeof clickEvent === "function") {
      clickEvent();
    }
  }
  return (
    <>
      <style>{`
                .animated-button {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 0.2rem;
                    padding: 1rem 2rem;
                    border: 4px solid transparent;
                    font-size: ${fontSize}rem;
                    background-color: inherit;
                    border-radius: 100px;
                    font-weight: 600;
                    color: ${color};
                    box-shadow: 0 0 0 2px ${allColor};
                    cursor: pointer;
                    overflow: hidden;
                    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                    height: ${h}rem;
                    min-width: ${w}rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.3rem;
                }
                .animated-button svg {
                    position: absolute;
                    width: 1.5rem;
                    fill: ${allColor};
                    z-index: 9;
                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .animated-button .arr-1 {
                    right: 16px;
                }
                .animated-button .arr-2 {
                    left: -25%;
                }
                .animated-button .circle {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 1.1rem;
                    height: 1.1rem;
                    background-color: ${allColor};
                    border-radius: 50%;
                    opacity: 0;
                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .animated-button .text {
                    position: relative;
                    z-index: 1;
                    transform: translateX(-12px);
                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .animated-button:hover {
                    box-shadow: 0 0 0 12px transparent;
                    color: ${hoverColor};
                    border-radius: 12px;
                }
                .animated-button:hover .arr-1 {
                    right: -25%;
                }
                .animated-button:hover .arr-2 {
                    left: 1rem;
                }
                .animated-button:hover .text {
                    transform: translateX(12px);
                }
                .animated-button:hover svg {
                    fill: #212121;
                }
                .animated-button:active {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 4px ${allColor};
                }
                .animated-button:hover .circle {
                    width: 13.75rem;
                    height: 13.75rem;
                    opacity: 1;
                }
 
            `}</style>

      <button onClick={handleClick} className="animated-button">
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <span className="text">{title}</span>
        <span className="circle" />
        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </>
  );
}

export function SwitchCase({ w, h }) {
  return (
    <>

      <style>{` 
    .toggler {
      width: 3rem;
      margin: 40px auto;
    }
    
    .toggler input {
      display: none;
    }
    
    .toggler label {
      display: block;
      position: relative;
      width:${w}rem;
      height: ${h}rem;
      border: 1px solid #d6d6d6;
      border-radius: 36px;
      background: #e4e8e8;
      cursor: pointer;
    }
    
    .toggler label::after {
      display: block;
      border-radius: 100%;
      background-color: #d7062a;
      content: '';
      animation-name: toggler-size;
      animation-duration: 0.15s;
      animation-timing-function: ease-out;
      animation-direction: forwards;
      animation-iteration-count: 1;
      animation-play-state: running;
    }
    
    .toggler label::after, .toggler label .toggler-on, .toggler label .toggler-off {
      position: absolute;
      top: 50%;
      left: 25%;
      width: 26px;
      height: 26px;
      transform: translateY(-50%) translateX(-50%);
      transition: left 0.15s ease-in-out, background-color 0.2s ease-out, width 0.15s ease-in-out, height 0.15s ease-in-out, opacity 0.15s ease-in-out;
    }
    
    .toggler input:checked + label::after, .toggler input:checked + label .toggler-on, .toggler input:checked + label .toggler-off {
      left: 75%;
    }
    
    .toggler input:checked + label::after {
      background-color: #50ac5d;
      animation-name: toggler-size2;
    }
    
    .toggler .toggler-on, .toggler .toggler-off {
      opacity: 1;
      z-index: 2;
    }
    
    .toggler input:checked + label .toggler-off, .toggler input:not(:checked) + label .toggler-on {
      width: 0;
      height: 0;
      opacity: 0;
    }
    
    .toggler .path {
      fill: none;
      stroke: #fefefe;
      stroke-width: 7px;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
    
    @keyframes toggler-size {
      0%, 100% {
        width: 1.5rem;
        height: 1.5rem;
      }
    
      50% {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    
    @keyframes toggler-size2 {
      0%, 100% {
        width: 1.5rem;
        height: 1.5rme;
      }
    
      50% {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
            
            `}</style>
      <div className="toggler">
        <input id="toggler-1" name="toggler-1" type="checkbox" defaultValue={1} />
        <label htmlFor="toggler-1">
          <svg
            className="toggler-on"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <polyline
              className="path check"
              points="100.2,40.2 51.5,88.8 29.8,67.5"
            />
          </svg>
          <svg
            className="toggler-off"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8" />
            <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8" />
          </svg>
        </label>
      </div>
    </>

  )
}



export function ChecOut({ title, clickEvent }) {
  let handleEvent = () => {
    if (typeof clickEvent === "function") {
      clickEvent();
    }

  }
  return (
    <>
      <style>{`
                .container {
  background-color: #ffffff;
  display: flex;
  width: 270px;
  height: 120px;
  position: relative;
  border-radius: 6px;
  transition: 0.3s ease-in-out;
}

.container:hover {
  transform: scale(1.03);
}

.container:hover .left-side {
  width: 100%;
}

.left-side {
  background-color: #5de2a3;
  width: 130px;
  height: 120px;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;
  overflow: hidden;
}

.right-side {
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  white-space: nowrap;
  transition: 0.3s;
}

.right-side:hover {
  background-color: #f9f7f9;
}

.arrow {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}

.new {
  font-size: 23px;
  font-family: "Lexend Deca", sans-serif;
  margin-left: 20px;
}

.card {
  width: 70px;
  height: 46px;
  background-color: #c7ffbc;
  border-radius: 6px;
  position: absolute;
  display: flex;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
  -moz-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
  -webkit-box-shadow: 9px 9px 9px -2px rgba(77, 200, 143, 0.72);
}

.card-line {
  width: 65px;
  height: 13px;
  background-color: #80ea69;
  border-radius: 2px;
  margin-top: 7px;
}

.buttons {
  width: 8px;
  height: 8px;
  background-color: #379e1f;
  box-shadow: 0 -10px 0 0 #26850e, 0 10px 0 0 #56be3e;
  border-radius: 50%;
  margin-top: 5px;
  transform: rotate(90deg);
  margin: 10px 0 0 -30px;
}

.container:hover .card {
  animation: slide-top 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) both;
}

.container:hover .post {
  animation: slide-post 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
}

@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(-70px) rotate(90deg);
    transform: translateY(-70px) rotate(90deg);
  }

  60% {
    -webkit-transform: translateY(-70px) rotate(90deg);
    transform: translateY(-70px) rotate(90deg);
  }

  100% {
    -webkit-transform: translateY(-8px) rotate(90deg);
    transform: translateY(-8px) rotate(90deg);
  }
}

.post {
  width: 63px;
  height: 75px;
  background-color: #dddde0;
  position: absolute;
  z-index: 11;
  bottom: 10px;
  top: 120px;
  border-radius: 6px;
  overflow: hidden;
}

.post-line {
  width: 47px;
  height: 9px;
  background-color: #545354;
  position: absolute;
  border-radius: 0px 0px 3px 3px;
  right: 8px;
  top: 8px;
}

.post-line:before {
  content: "";
  position: absolute;
  width: 47px;
  height: 9px;
  background-color: #757375;
  top: -8px;
}

.screen {
  width: 47px;
  height: 23px;
  background-color: #ffffff;
  position: absolute;
  top: 22px;
  right: 8px;
  border-radius: 3px;
}

.numbers {
  width: 12px;
  height: 12px;
  background-color: #838183;
  box-shadow: 0 -18px 0 0 #838183, 0 18px 0 0 #838183;
  border-radius: 2px;
  position: absolute;
  transform: rotate(90deg);
  left: 25px;
  top: 52px;
}

.numbers-line2 {
  width: 12px;
  height: 12px;
  background-color: #aaa9ab;
  box-shadow: 0 -18px 0 0 #aaa9ab, 0 18px 0 0 #aaa9ab;
  border-radius: 2px;
  position: absolute;
  transform: rotate(90deg);
  left: 25px;
  top: 68px;
}

@keyframes slide-post {
  50% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-70px);
    transform: translateY(-70px);
  }
}

.dollar {
  position: absolute;
  font-size: 16px;
  font-family: "Lexend Deca", sans-serif;
  width: 100%;
  left: 0;
  top: 0;
  color: #4b953b;
  text-align: center;
}

.container:hover .dollar {
  animation: fade-in-fwd 0.3s 1s backwards;
}

@keyframes fade-in-fwd {
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
            `}</style>
      <div onClick={handleEvent} className="container">
        <div className="left-side">
          <div className="card">
            <div className="card-line" />
            <div className="buttons" />
          </div>
          <div className="post">
            <div className="post-line" />
            <div className="screen">
              <div className="dollar">$</div>
            </div>
            <div className="numbers" />
            <div className="numbers-line2" />
          </div>
        </div>
        <div className="right-side">
          <div className="new">{title}</div>
          <svg
            viewBox="0 0 451.846 451.847"
            height={512}
            width={512}
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path
              fill="#cfcfcf"
              data-old_color="#000000"
              className="active-path"
              data-original="#000000"
              d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export function Loader() {
  return (
    <>
      <style>{`
        /* Assuming base font size of 16px, so 1rem = 16px */

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-wide {
    width: 17.375rem;
    height: 17.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.color {
  background-color: #3395ff;
}

.l1 {
  width: 0.9375rem; /* 15px / 16px */
  height: 4.0625rem; /* 65px / 16px */
  position: absolute;
  animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

.l2 {
  width: 0.9375rem; /* 15px / 16px */
  height: 3.75rem;  /* 60px / 16px */
  position: absolute;
  transform: rotate(90deg);
  animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

@keyframes move-h {
  0% {
    top: 0;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 30%;
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

@keyframes move-v {
  0% {
    left: 0;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    left: 45%;
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

.animation-effect-light {
  animation: effect 0.2s 0.1s infinite linear;
}

.animation-effect-light-d {
  animation: effect 0.3s 0.2s infinite linear;
}

.animation-effect-rot {
  animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

.animation-effect-scale {
  animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

@keyframes effect {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.9);
  }
  100% {
    transform: scale(1);
  }
}

.e1 {
  width: 0.0625rem; /* 1px / 16px */
  height: 2.5rem;   /* 40px / 16px */
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0.5rem;    /* 8px / 16px */
}

.e2 {
  width: 3.75rem;  /* 60px / 16px */
  height: 0.0625rem; /* 1px / 16px */
  opacity: 0.8;
  position: absolute;
  top: 0.5rem;    /* 8px / 16px */
  left: 0;
}

.e3 {
  position: absolute;
  top: 0.625rem;  /* 10px / 16px */
  left: 0.75rem;  /* 12px / 16px */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 900;
  font-size: 1.125rem;  /* 18px / 16px */
  color: #3395ff;
}

.e4 {
  width: 0.0625rem; /* 1px / 16px */
  height: 2.5rem;   /* 40px / 16px */
  opacity: 0.3;
  position: absolute;
  top: 5.625rem;   /* 90px / 16px */
  right: 0.625rem; /* 10px / 16px */
}

.e5 {
  width: 2.5rem;   /* 40px / 16px */
  height: 0.0625rem; /* 1px / 16px */
  opacity: 0.3;
  position: absolute;
  top: 6.25rem;    /* 100px / 16px */
  right: 0;
}

.e6 {
  position: absolute;
  top: 6.25rem;    /* 100px / 16px */
  right: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;  /* 32px / 16px */
  color: #3395ff;
}

.e7 {
  width: 0.0625rem; /* 1px / 16px */
  height: 1.25rem;  /* 20px / 16px */
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(45deg);
  animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

@keyframes height {
  0% {
    bottom: 0%;
    left: 0%;
    height: 0;
  }
  25% {
    height: 5.625rem; /* 90px / 16px */
  }
  50% {
    bottom: 100%;
    left: 100%;
    height: 5.625rem; /* 90px / 16px */
  }
  75% {
    height: 0;
  }
  100% {
    bottom: 0%;
    left: 0%;
    height: 0;
  }
}

.e8 {
  width: 1.25rem;  /* 20px / 16px */
  height: 0.0625rem; /* 1px / 16px */
  position: absolute;
  bottom: 50%;
  left: 0;
  animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}

@keyframes width {
  0% {
    left: 0%;
    width: 0;
  }
  50% {
    left: 100%;
    width: 5.625rem; /* 90px / 16px */
  }
  100% {
    left: 0%;
    width: 0;
  }
}

        `}</style>
      <div className="loading">
        <div className="loading-wide">
          <div className="l1 color" />
          <div className="l2 color" />
          <div className="e1 color animation-effect-light" />
          <div className="e2 color animation-effect-light-d" />
          <div className="e3 animation-effect-rot">X</div>
          <div className="e4 color animation-effect-light" />
          <div className="e5 color animation-effect-light-d" />
          <div className="e6 animation-effect-scale">*</div>
          <div className="e7 color" />
          <div className="e8 color" />
        </div>
      </div>
      <CounterUp size={2} weight={"bold"} start={0} end={100} time={12} />
    </>

  )
}

export function Slider({ children, autoplay = false, autoplayInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
      }, autoplayInterval);
      return () => clearInterval(intervalId);
    }
  }, [autoplay, autoplayInterval, children]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <style>{`
      .slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height:100%;
}

.slider-wrapper {
  width: 100%;
  overflow: hidden;
}

.slider-content {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-slide {
  flex: 0 0 100%;
  box-sizing: border-box;
  width: 100%;
  height:100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}

.slider-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

      `}</style>
      <div className="slider-container">

        <div className="slider-wrapper">
          <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {React.Children.map(children, (child, index) => (
              <div className="slider-slide" key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>

        <div className="slider-pagination">
          {React.Children.map(children, (_, index) => (
            <span
              key={index}
              className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}


export function MiniNav({ w = 20, h = 3.5, homeEvent = () => { window.open("https://askander.vercel.app") }, homeSVG = <svg
  className="icon"
  stroke="currentColor"
  fill="currentColor"
  strokeWidth={0}
  viewBox="0 0 1024 1024"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
</svg>,
  presonEvent = () => { window.open("https://askander.vercel.app") },
  personSVG = <svg
    className="icon"
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
  </svg>,
  searchEvent = () => { window.open("https://askander.vercel.app") },
  searchSVG = <svg
    className="icon"
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>,
  shopEvent = () => { window.open("https://askander.vercel.app") },
  shopSVG = <svg
    className="icon"
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={9} cy={21} r={1} />
    <circle cx={20} cy={21} r={1} />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>

}) {


  let handlHomeSVGClick = () => {
    if (typeof homeEvent === "function") {
      homeEvent()
    }
  }
  let handlePersonSVGClick = () => {
    if (typeof presonEvent === "function") {
      presonEvent()
    }
  }
  let handleSearchSVGClick = () => {
    if (typeof searchEvent === "function") {
      searchEvent()
    }
  }
  let handleShopSVGClick = () => {
    shopEvent()
  }
  return (
    <>
      <style>{`
        .button-container {
    display: flex;
    background-color: rgb(27, 133, 219);
    width: ${w}rem;
    height: ${h}rem;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
      rgba(27, 133, 219, 0.5) 5px 10px 15px;
}

.button {
  outline: 0 !important;
  border: 0 !important;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
}

.button:hover {
  transform: translateY(-3px);
}

.icon {
  font-size: 20px;
}

        `}</style>
      <div className="button-container">
        <button onClick={handlHomeSVGClick} className="button">
          {homeSVG}
        </button>
        <button onClick={handlePersonSVGClick} className="button">
          {searchSVG}
        </button>
        <button onClick={handleSearchSVGClick} className="button">
          {personSVG}
        </button>
        <button onClick={handleShopSVGClick} className="button">
          {shopSVG}
        </button>
      </div>
    </>

  )
}








export function Register({ Name, Pass }) {
  return (
    <>
      <style>{`.container {
max-width: 21.875rem; /* 350px */
background: #F8F9FD;
background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
border-radius: 2.5rem; /* 40px */
padding: 1.5625rem 2.1875rem; /* 25px 35px */
border: 0.3125rem solid rgb(255, 255, 255); /* 5px */
box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 1.875rem 1.875rem -1.25rem; /* 0px 30px 30px -20px */
margin: 1.25rem; /* 20px */
}

.heading {
text-align: center;
font-weight: 900;
font-size: 1.875rem; /* 30px */
color: rgb(16, 137, 211);
}

.form {
margin-top: 1.25rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 18.8rem;
}

.form .input {
width: 100%;
background: white;
border: none;
padding: 0.9375rem 1.25rem; /* 15px 20px */
border-radius: 1.25rem; /* 20px */
margin-top: 0.9375rem; /* 15px */
box-shadow: #cff0ff 0px 0.625rem 0.625rem -0.3125rem; /* 10px 10px -5px */
border-inline: 0.125rem solid transparent; /* 2px */
}

.form .input::-moz-placeholder {
color: rgb(170, 170, 170);
}

.form .input::placeholder {
color: rgb(170, 170, 170);
}

.form .input:focus {
outline: none;
border-inline: 0.125rem solid #12B1D1; /* 2px */
}

.form .forgot-password {
display: block;
margin-top: 0.625rem; /* 10px */
margin-left: 0.625rem; /* 10px */
}

.form .forgot-password a {
font-size: 0.6875rem; /* 11px */
color: #0099ff;
text-decoration: none;
}

.form .login-button {
display: block;
width: 100%;
font-weight: bold;
background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
color: white;
padding-block: 0.9375rem; /* 15px */
margin: 1.25rem auto; /* 20px auto */
border-radius: 1.25rem; /* 20px */
box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 1.25rem 0.625rem -0.9375rem; /* 20px 10px -15px */
border: none;
transition: all 0.2s ease-in-out;
}

.form .login-button:hover {
transform: scale(1.03);
box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 1.4375rem 0.625rem -1.25rem; /* 23px 10px -20px */
}

.form .login-button:active {
transform: scale(0.95);
box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 0.9375rem 0.625rem -0.625rem; /* 15px 10px -10px */
}

.social-account-container {
margin-top: 1.5625rem; /* 25px */
}

.social-account-container .title {
display: block;
text-align: center;
font-size: 0.625rem; /* 10px */
color: rgb(170, 170, 170);
}

.social-account-container .social-accounts {
width: 100%;
display: flex;
justify-content: center;
gap: 0.9375rem; /* 15px */
margin-top: 0.3125rem; /* 5px */
}

.social-account-container .social-accounts .social-button {
background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
border: 0.3125rem solid white; /* 5px */
padding: 0.3125rem; /* 5px */
border-radius: 50%;
width: 2.5rem; /* 40px */
aspect-ratio: 1;
display: grid;
place-content: center;
box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 0.75rem 0.625rem -0.5rem; /* 12px 10px -8px */
transition: all 0.2s ease-in-out;
}

.social-account-container .social-accounts .social-button .svg {
fill: white;
margin: auto;
}

.social-account-container .social-accounts .social-button:hover {
transform: scale(1.2);
}

.social-account-container .social-accounts .social-button:active {
transform: scale(0.9);
}

.agreement {
display: block;
text-align: center;
margin-top: 0.9375rem; /* 15px */
}

.agreement a {
text-decoration: none;
color: #0099ff;
font-size: 0.5625rem; /* 9px */
}
      `}</style>
      <div className="container">
        <div className="heading">Sign In</div>
        <form action="" className="form">
          <input
            required=""
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={Name}
          />
          <input
            required=""
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={Pass}
          />
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <input className="login-button" type="submit" defaultValue="Sign In" />
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </button>
            <button className="social-button apple">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </button>
            <button className="social-button twitter">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </button>
          </div>
        </div>
        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </div>
    </>
  )
}

export function IconsGroup({ firstSVG = <svg version="1.1" viewBox="0 0 100 100">
  <path
    d="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8  c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5  c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1  c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2  c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0  c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2  C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z"
    fill="currentColor"
  />
</svg>, firstTitle = "spotify", firstIconLink = "#", firstColor = "green",


  secoundSVG = <svg version="1.1" viewBox="0 0 100 100" xmlSpace="preserve">
    <path
      d="M83,17.8C74.5,8.9,63.4,4.3,50,4.1C37.7,4.2,26.8,8.6,17.9,17.3C8.9,26,4.3,37,4.1,50c0,0,0,0,0,0c0,9.1,2.5,17.4,7.4,24.9  c4.9,7.4,11.6,13.2,20.1,17.1c0.3,0.1,0.7,0.1,1-0.1c0.3-0.2,0.5-0.5,0.5-0.8l0-4.9c0.1-2.1,0.7-5.3,1.7-9.5c1-4,1.7-6.7,1.9-7.6  c0.7-3,1.7-7.2,3-12.6c0.1-0.2,0-0.5-0.1-0.7c-0.4-0.8-1-2.6-1.5-6.6c0.1-2.7,0.8-5.2,2.1-7.3c1.2-2,3.1-3.1,5.7-3.5  c2,0.1,4.7,0.8,5.1,5.9c-0.1,1.8-0.8,4.5-1.9,8.1c-1.2,3.8-1.9,6.3-2.1,7.6c-0.7,2.5-0.2,4.8,1.5,6.8c1.6,1.9,3.8,2.9,6.5,3.1  c4.3-0.1,8.1-2.6,11.2-7.5c1.7-3,2.9-6.3,3.5-9.7c0.7-3.4,0.7-7.1,0-10.8c-0.7-3.8-2.2-7.1-4.5-9.8c0,0-0.1-0.1-0.1-0.1  c-4.3-3.7-9.5-5.3-15.6-5c-6,0.4-11.3,2.6-15.9,6.6c-2.9,3.2-4.8,7.1-5.7,11.6c-0.9,4.6,0,9.1,2.6,13.3c0.3,0.5,0.5,0.8,0.6,1  c0,0.3,0,1-0.5,2.8c-0.5,1.8-0.9,2.2-0.9,2.2c0,0-0.1,0-0.1,0.1c0,0-0.2,0-0.4-0.1c-2.2-1-3.9-2.4-5.2-4.2c-1.3-1.9-2.1-4-2.5-6.3  c-0.3-2.5-0.4-5-0.3-7.5c0.2-2.5,0.7-5.1,1.4-7.7c3-6.9,8.5-11.9,16.3-14.8c7.8-2.9,16-3.2,24.3-0.8c6.5,2.8,11,7.4,13.6,13.7  c2.5,6.4,2.8,13.4,0.8,20.8c-2.2,7.1-6.4,12.4-12.1,15.7c-5.6,2.8-10.8,3-15.7,0.7c-1.8-1.1-3.1-2.3-3.9-3.5c-0.2-0.3-0.6-0.5-1-0.5  c-0.4,0.1-0.7,0.3-0.8,0.7c-0.7,2.7-1.3,4.7-1.6,6.2c-1.4,5.4-2.6,9.2-3.4,11c-0.8,1.6-1.6,3.1-2.4,4.3c-0.2,0.3-0.2,0.6-0.1,0.9  s0.3,0.5,0.6,0.6c4.3,1.3,8.7,2,13,2c12.4-0.1,23.2-4.6,32.1-13.4C91.1,73.9,95.8,62.9,96,50C95.9,37.5,91.5,26.7,83,17.8z"
      fill="currentColor"
    />
  </svg>, secoundTitle = "pentrest", secoundIconLink = "#", SecoundColor = "#bd081c",


  thirdSVG = <svg version="1.1" viewBox="0 0 100 100">
    <path
      d="M83.5,18.5C74.9,9.3,62.8,4,50.2,4c-6.1,0-12,1.1-17.6,3.4C15.2,14.5,4,31.3,4,50c0,13.9,6.2,26.9,17,35.7  C29.2,92.3,39.4,96,50,96c6.6,0,13.2-1.5,19.2-4.2c12.5-5.7,21.7-16.6,25.2-29.8C95.5,57.9,96,53.8,96,50  C96,38.3,91.6,27.1,83.5,18.5z M75,22.3c-0.7,0.9-1.4,1.8-2.1,2.6c-1.4,1.6-2.8,3-4.4,4.3c-0.3,0.3-0.6,0.6-1,0.8  c-1,0.9-2.1,1.7-3.2,2.5l-0.3,0.2c-1.1,0.7-2.2,1.5-3.5,2.2c-0.4,0.3-0.9,0.5-1.4,0.8c-0.8,0.5-1.7,0.9-2.7,1.4  c-0.6,0.3-1.2,0.5-1.8,0.8L54.3,38c-0.1,0-0.2,0.1-0.3,0.1c0,0,0,0,0,0c-1.3-2.6-2.4-4.9-3.5-7l-0.3-0.5c-1.1-2-2.2-4-3.3-6  l-0.7-1.3c-1.1-1.9-2.2-3.7-3.2-5.4l-0.7-1.1c-0.7-1.2-1.4-2.3-2.2-3.5c3.2-0.8,6.5-1.3,9.8-1.3c9.4,0,18.4,3.5,25.4,9.8  C75.3,21.9,75.2,22.1,75,22.3z M46.4,40.6c-1.4,0.4-2.9,0.8-4.4,1.1c-0.3,0-0.7,0.1-0.9,0.2c-6,1-12.5,1.4-19.4,1.1  c-0.3,0-0.6,0-0.9,0c-0.3,0-0.5,0-0.7,0c-2.5-0.2-4.9-0.4-7.2-0.7c2.3-11.2,9.6-20.9,19.8-26.1c2.1,3.3,4.2,6.7,6.3,10.3l0.4,0.7  c0.9,1.6,1.9,3.4,3.2,5.8l0.6,1.2C44.4,36.6,45.4,38.6,46.4,40.6z M24.4,51.1c2.2,0.1,4.2,0,6.2-0.1l0.7,0c0.4,0,0.9,0,1.3,0  c2.8-0.2,5.5-0.5,8.5-1c0.5-0.1,1-0.2,1.6-0.3l0.5-0.1c2.2-0.4,4.2-0.9,6.1-1.4c0.1,0,0.3-0.1,0.4-0.1l0.5,1.1  c1.2,2.8,2.3,5.5,3.3,8.1c0,0,0,0,0,0c-0.2,0.1-0.5,0.2-0.7,0.2c-2,0.6-4,1.4-5.9,2.2c-0.6,0.3-1.3,0.5-1.9,0.8  c-1.4,0.6-2.7,1.3-4.1,2.1l-0.3,0.2c-0.2,0.1-0.5,0.2-0.6,0.4c-1.5,0.9-3.1,1.9-4.7,3c-0.2,0.1-0.4,0.3-0.6,0.4  c-0.2,0.1-0.4,0.3-0.6,0.5c-1,0.7-2,1.5-3,2.3c-0.4,0.3-0.7,0.6-1.1,0.9l-0.3,0.3c-0.7,0.6-1.5,1.3-2.2,1.9l-0.2,0.2  c-0.4,0.4-0.7,0.7-1.1,1.1l-0.2,0.2c-0.6,0.6-1.3,1.3-2,2l-0.4,0.4c-0.2,0.2-0.4,0.4-0.5,0.6C16.1,69.9,12,60.2,12,50.3  c0,0,0.1,0,0.1,0c0.4,0,0.7,0,1.1,0.1c3.5,0.4,6.9,0.6,10.3,0.7C23.8,51,24.1,51.1,24.4,51.1z M29.5,81.9c0.2-0.2,0.3-0.4,0.5-0.5  c1-1.1,2-2.1,3-3c1.9-1.8,3.8-3.3,5.7-4.8c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.2,0.5-0.4,0.8-0.6c1.1-0.8,2.2-1.5,3.4-2.2  c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c1.4-0.8,2.9-1.6,4.5-2.3c0.3-0.1,0.6-0.2,0.8-0.4l0.6-0.3  c1.1-0.5,2.2-0.9,3.5-1.4c0.5-0.2,1.1-0.4,1.7-0.6l0.2-0.1c0.4-0.1,0.7-0.2,1.1-0.3c0,0,0,0,0,0c1.1,3.2,2.3,6.4,3.3,9.8l0.1,0.4  c1.1,3.6,2,7.3,2.9,10.8C51.7,89.8,39.3,88.3,29.5,81.9C29.4,81.9,29.4,81.9,29.5,81.9z M65.6,62.9c0.7-0.1,1.3-0.2,2-0.2  c2-0.2,4-0.2,5.9-0.2c0.2,0,0.4,0,0.6,0l0.2,0c2.2,0.1,4.6,0.3,6.9,0.6c0.4,0.1,0.9,0.1,1.3,0.2l0.6,0.1c0.7,0.1,1.5,0.3,2.2,0.4  c-3,7.6-8.3,14-15.2,18.3c-0.8-3.1-1.7-6.2-2.6-9.2l-0.1-0.4c-0.9-3-1.9-6.1-3.1-9.5C64.8,63.1,65.2,63,65.6,62.9z M81.6,55.2  C80,55,78.4,54.9,77,54.8l-0.9-0.1c-0.9-0.1-1.9-0.1-2.8-0.2c-0.2,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.6,0c-2,0-3.9,0.1-5.9,0.3  c-0.2,0-0.3,0-0.5,0.1c-0.1,0-0.2,0-0.3,0c-1.3,0.1-2.6,0.3-3.9,0.5c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.2-0.2-0.5-0.3-0.7  c-1.1-2.9-2.3-5.7-3.2-7.8l-0.3-0.6c-0.1-0.1-0.1-0.3-0.2-0.4c0,0,0,0,0.1,0c0.2-0.1,0.5-0.2,0.7-0.3c0.6-0.2,1.2-0.5,1.8-0.8  c1.2-0.5,2.4-1.2,3.6-1.8c0.1-0.1,0.3-0.2,0.5-0.2c0.2-0.1,0.5-0.2,0.7-0.4c1.5-0.9,2.9-1.8,4.2-2.7l0.3-0.2  c0.2-0.1,0.4-0.3,0.6-0.4c0.9-0.6,1.9-1.4,2.8-2.2c1.5-1.2,2.9-2.5,4.3-4c0.8-0.8,1.5-1.6,2.2-2.4l0.4-0.5c0.5-0.5,0.9-1.1,1.3-1.6  C85.5,34.3,88,42.1,88,50c0,2-0.2,4.1-0.5,6.1c-0.3,0-0.6-0.1-0.8-0.1c-0.4-0.1-0.7-0.1-1.1-0.2l-1.1-0.2  C83.5,55.5,82.5,55.3,81.6,55.2z"
      fill="currentColor"
    />
  </svg>, thirdTitle = "dribble", thirdIconLink = "#", thirdColor = "#bd081c",



  fourthSVG = <svg version="1.1" viewBox="0 0 100 100">
    <path
      d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
      fill="currentColor"
    />
  </svg>, fourthTitle = "telegram", fourthIconLink = "#", fourthColor = "#0088cc"

}
) {

  return (
    <>
      <style>{`
        ul {
  list-style: none;
}

.example-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 16rem;
  margin-right: 2rem;
}

.example-2 .icon-content {
  margin: 0 0.625rem;
  position: relative;
}

.example-2 .icon-content .tooltip {
  position: absolute;
  top: -1.875rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 0.375rem 0.625rem;
  border-radius: 0.9375rem;
  opacity: 0;
  visibility: hidden;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -3.125rem;
}

.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 20%;
  color: #4d4d4d;
  background-color: #ffff;
  transition: all 0.3s ease-in-out;
}

.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
}

.example-2 .icon-content a svg {
  position: relative;
  z-index: 1;
  width: 1.875rem;
  height: 1.875rem;
}

.example-2 .icon-content a:hover {
  color: white;
}

.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}

.example-2 .icon-content a:hover .filled {
  height: 100%;
}

.example-2 .icon-content a[data-social="spotify"] .filled,
.example-2 .icon-content a[data-social="spotify"] ~ .tooltip {
  background-color:${firstColor};
}

.example-2 .icon-content a[data-social="pinterest"] .filled,
.example-2 .icon-content a[data-social="pinterest"] ~ .tooltip {
  background-color: ${SecoundColor};
}

.example-2 .icon-content a[data-social="dribbble"] .filled,
.example-2 .icon-content a[data-social="dribbble"] ~ .tooltip {
  background-color: ${thirdColor};
}

.example-2 .icon-content a[data-social="telegram"] .filled,
.example-2 .icon-content a[data-social="telegram"] ~ .tooltip {
  background-color: ${fourthColor};
}

        `}</style>
      <ul className="example-2">
        <li className="icon-content">
          <a
            href={firstIconLink}
            aria-label="spotify"
            data-social="spotify"
          >
            <div className="filled" />
            {firstSVG}
          </a>
          <div className="tooltip">{firstTitle}</div>
        </li>

        <li className="icon-content">
          <a
            href={secoundIconLink}
            aria-label="Pinterest"
            data-social="pinterest"
          >
            <div className="filled" />
            {secoundSVG}
          </a>
          <div className="tooltip">{secoundTitle}</div>
        </li>

        <li className="icon-content">
          <a
            href={thirdIconLink}
            aria-label="Dribbble"
            data-social="dribbble"
          >
            <div className="filled" />
            {thirdSVG}
          </a>
          <div className="tooltip">{thirdTitle}</div>
        </li>

        <li className="icon-content">
          <a
            href={fourthIconLink}
            aria-label="Telegram"
            data-social="telegram"
          >
            <div className="filled" />
            {fourthSVG}
          </a>
          <div className="tooltip">{fourthTitle}</div>
        </li>

      </ul>

    </>
  );
}
