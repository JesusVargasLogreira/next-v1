"use client";
import Props from "./props";
import { useAppContext } from "../contexto/appcontext";

export default function Uno() {
    const { nombre } = useAppContext();

    return (
        <div>
            uno

            <Props nombre="este es un props" />
        </div >
    );
}
