"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ai from "../../../public/notfound/ai.png";
import android from "../../../public/notfound/andriod.svg";
import apple from "../../../public/notfound/apple.svg";
import blue from "../../../public/notfound/blue.png";
import ch from "../../../public/notfound/ch.svg";
import ch3 from "../../../public/notfound/che3.svg";
import cheval from "../../../public/notfound/cheval.svg";
import css from "../../../public/notfound/css.png";
import figma from "../../../public/notfound/figma.png";
import html from "../../../public/notfound/html.svg";
import insta from "../../../public/notfound/insta.png";
import magneto from "../../../public/notfound/magneto.png";
import php from "../../../public/notfound/php.png";
import pr from "../../../public/notfound/pr.png";
import ps from "../../../public/notfound/ps.png";
import px from "../../../public/notfound/px.png";
import react from "../../../public/notfound/react.png";
import shopify from "../../../public/notfound/shopify.png";
import wp from "../../../public/notfound/wp.svg";
import facebook from "../../../public/notfound/fb.png";

import Matter from "matter-js";
import { disableImageOptimization } from "@/util/constants";

const images = [
  ai,
  android,
  apple,
  blue,
  ch,
  ch3,
  cheval,
  css,
  figma,
  html,
  insta,
  magneto,
  php,
  pr,
  ps,
  px,
  react,
  shopify,
  wp,
  facebook,
];
const NotFoundContent = () => {
  const matterBoxRef = useRef(null);
  useEffect(() => {
    if (matterBoxRef.current) {
      var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Events = Matter.Events,
        Body = Matter.Body;

      var engine = Engine.create();

      // var matterBox = matterBoxRef.current;
      var matterBox = document.querySelector(".matter-box");
      var render = Render.create({
        element: matterBox,
        engine: engine,
        options: {
          width: matterBox.clientWidth,
          height: matterBox.clientHeight,
          wireframes: false,
          background: "transparent",
        },
      });

      var matterCircle = document.querySelectorAll(".dm-matter-elem-circle");

      function createCircles() {
        return Array.from(matterCircle)?.map(function (matterCircleElem) {
          var circleElemWidth = matterCircleElem.offsetWidth;
          var circleElemHeight = matterCircleElem.offsetHeight;
          var circleElemPosX =
            matterCircleElem.offsetLeft + circleElemWidth / 2;
          var circleElemPosY =
            matterCircleElem.offsetTop + circleElemHeight / 2;

          var circleBody = Bodies.circle(
            circleElemPosX,
            circleElemPosY,
            Math.max(circleElemWidth, circleElemHeight) / 2,
            {
              density: 0.01,
              friction: 0.1,
              restitution: 0.5,
              render: {
                opacity: 0,
              },
            }
          );

          Composite.add(engine.world, circleBody);
          return circleBody;
        });
      }

      var elemCircles = createCircles();

      function createBoundaries() {
        var ground = Bodies.rectangle(
          matterBox.clientWidth / 2,
          matterBox.clientHeight,
          matterBox.clientWidth,
          1,
          {
            isStatic: true,
            render: {
              opacity: 0,
            },
          }
        );

        var leftWall = Bodies.rectangle(
          0,
          matterBox.clientHeight / 2,
          1,
          matterBox.clientHeight,
          {
            isStatic: true,
            render: {
              opacity: 0,
            },
          }
        );

        var rightWall = Bodies.rectangle(
          matterBox.clientWidth,
          matterBox.clientHeight / 2,
          1,
          matterBox.clientHeight,
          {
            isStatic: true,
            render: {
              opacity: 0,
            },
          }
        );

        var topWall = Bodies.rectangle(
          matterBox.clientWidth / 2,
          0,
          matterBox.clientWidth,
          1,
          {
            isStatic: true,
            render: {
              opacity: 0,
            },
          }
        );

        Composite.add(engine.world, [ground, leftWall, rightWall, topWall]);
      }

      createBoundaries();

      var runner = Runner.create();

      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.5,
          render: {
            visible: false,
          },
        },
      });

      Composite.add(engine.world, mouseConstraint);

      render.mouse = mouse;

      Events.on(engine, "afterUpdate", function () {
        elemCircles.forEach(function (circleBody, index) {
          var angle = circleBody.angle;
          var position = circleBody.position;
          var matterCircleElem = matterCircle[index];

          matterCircleElem.style.left =
            position.x - matterCircleElem.offsetWidth / 2 + "px";
          matterCircleElem.style.top =
            position.y - matterCircleElem.offsetHeight / 2 + "px";
          matterCircleElem.style.transform = "rotate(" + angle + "rad)";
        });
      });

      function handleResize() {
        Composite.clear(engine.world, false);

        createBoundaries();
        elemCircles = createCircles();

        render.options.width = matterBox.clientWidth;
        render.options.height = matterBox.clientHeight;

        mouseConstraint.mouse.element.removeEventListener(
          "mousewheel",
          mouseConstraint.mouse.mousewheel
        );
        mouseConstraint.mouse.element.removeEventListener(
          "DOMMouseScroll",
          mouseConstraint.mouse.mousewheel
        );

        mouseConstraint.mouse.element.removeEventListener(
          "touchstart",
          mouseConstraint.mouse.mousedown
        );
        mouseConstraint.mouse.element.removeEventListener(
          "touchmove",
          mouseConstraint.mouse.mousemove
        );
        mouseConstraint.mouse.element.removeEventListener(
          "touchend",
          mouseConstraint.mouse.mouseup
        );

        mouseConstraint.mouse.element.addEventListener(
          "touchstart",
          mouseConstraint.mouse.mousedown,
          { passive: true }
        );
        mouseConstraint.mouse.element.addEventListener("touchmove", (e) => {
          if (mouseConstraint.body) {
            mouseConstraint.mouse.mousemove(e);
          }
        });
        mouseConstraint.mouse.element.addEventListener("touchend", (e) => {
          if (mouseConstraint.body) {
            mouseConstraint.mouse.mouseup(e);
          }
        });
      }

      mouseConstraint.mouse.element.addEventListener(
        "touchstart",
        mouseConstraint.mouse.mousedown,
        { passive: true }
      );
      mouseConstraint.mouse.element.addEventListener("touchmove", (e) => {
        if (mouseConstraint.body) {
          mouseConstraint.mouse.mousemove(e);
        }
      });
      mouseConstraint.mouse.element.addEventListener("touchend", (e) => {
        if (mouseConstraint.body) {
          mouseConstraint.mouse.mouseup(e);
        }
      });

      var engineStarted = false;

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !engineStarted) {
              engineStarted = true;
              Runner.run(runner, engine);
              Render.run(render);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(matterBox);
      return () => {
        Composite.clear(engine.world, true);
        Render.stop(render);
        Runner.stop(runner);
        Engine.clear(engine);

        render.canvas.remove();
        render.textures = {};

        observer.disconnect();

        window.removeEventListener("resize", handleResize);

        const element = mouseConstraint.mouse.element;
        element.removeEventListener(
          "touchstart",
          mouseConstraint.mouse.mousedown
        );
        element.removeEventListener(
          "touchmove",
          mouseConstraint.mouse.mousemove
        );
        element.removeEventListener("touchend", mouseConstraint.mouse.mouseup);
        element.removeEventListener(
          "mousewheel",
          mouseConstraint.mouse.mousewheel
        );
        element.removeEventListener(
          "DOMMouseScroll",
          mouseConstraint.mouse.mousewheel
        );
      };
    }
  }, []);

  return (
    <div
      className="relative z-auto w-screen h-fit  text-white overflow-hidden"
      ref={matterBoxRef}
    >
      <div className="matter-box h-[100vh] w-full  z-[50] absolute top-[0%]">
        {images?.map((img, index) => (
          <Image
            width={0}
            height={0}
            sizes="100vw"
            key={index}
            src={img}
            alt={"img"}
            unoptimized={disableImageOptimization}
            className="w-20 md:w-24 lg:w-28 h-auto absolute left-[50%] top-10 dm-matter-elem-circle z-[101] cursor-grab opacity-50"
          />
        ))}
      </div>
      <div className="absolute inset-0 z-40 flex flex-col py-32 items-center justify-center bg-[#F3F3F3]">
        <h1
          className=" text-[100px] sm:text-[150px] md:text-[200px]  lg:text-[250px]  font-bold font-sora 
               bg-gradient-to-r from-[#101763] to-[#D81100] 
               bg-clip-text text-transparent leading-normal"
        >
          404
        </h1>
        <p className="text-[#101763] font-sora text-xl sm:text-2xl md:text-3xl font-semibold leading-[140%] -mt-6 sm:-mt-10 md:-mt-16">
          Page Not Found
        </p>
      </div>
    </div>
  );
};

export default NotFoundContent;
