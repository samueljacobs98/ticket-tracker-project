import { useRef, useEffect } from "react";
import "./Canvas.scss";

const Canvas = ({ height, width }) => {
  const canvas = useRef();

  class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  class Agent {
    constructor(x, y) {
      this.pos = new Vector(x, y);
      this.vel = new Vector(-1 + Math.random() * 2, -1 + Math.random() * 2);
      this.radius = 4 + Math.random() * 8;
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.pos.x, this.pos.y);

      ctx.lineWidth = 4;

      ctx.beginPath();
      ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${Math.random() * 50 + 280}, 100%, 50%, ${
        Math.random() * 0.75
      })`;
      ctx.stroke();
      ctx.restore();
    }
  }

  const createAgentArray = () => {
    const agents = [];
    const numberOfAgents = 40 + Math.random() * 20;

    for (let i = 0; i < numberOfAgents; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;

      agents.push(new Agent(x, y));
    }
    return agents;
  };

  const agentsArr = createAgentArray();

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    agentsArr.forEach((agent) => {
      agent.draw(context);
    });
  });
  return (
    <canvas ref={canvas} height={height} width={width} className="canvas" />
  );
};

export default Canvas;
