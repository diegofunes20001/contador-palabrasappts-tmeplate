"use client";
import React, {useState, useEffect } from "react";

export default function ColorText() {
  const [text, setTexto] = useState<string>("");
  const [colorLetras,setColorletras] = useState<number>(0);
  const [color, setColor] = useState<string>("yellow")

  useEffect(() => {
    let colorLetras = text.length;
    if(colorLetras> 10 && colorLetras < 50) {
      setColor("green");
    }
    else if(colorLetras> 50) {
      setColor("red");
    }

    setColorletras(colorLetras)
  }, [text]);

  function asignarTexto(e: any) {
    let textoIngresar = e.target.value;
    //if (textoIngresar e.target.value.length >10) return
    setTexto(e.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <label htmlFor="textInput" className="block text-sm font-medium text-gray-700 mb-2">
        Ingresa tu texto:
      </label>

      <textarea
      id="textInput"
      value={text}
      onChange={(e) => setTexto(e.target.value)}
      className="w-80 h-40 p-2 border border-gray-100 rounded-md"
      />
      <span className="mt-4">Texto ingresado: {text}</span>
      <span className="mt-4" style={{ color: color }}>Text: {colorLetras}</span>
   </div>
  );
}
