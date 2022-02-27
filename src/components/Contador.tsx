import { type } from "os";
import React, { FC, useState, useEffect } from "react";
import { text } from "stream/consumers";
import { isAwaitExpression } from "typescript";
import Character from "./Character";

type Tcharacter = {
    name: string,
    id: string,
    eye_color: string,
    gender: string,
    mass: string,
}
const Contador: FC = () => {
    const getChars = async (texto: string) => {
        try {
            const response = await fetch(
                `https://swapi.dev/api/people/?search=${texto}`);
            const data = await response.json();
            setChars(data.results);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }
    const [chars, setChars] = useState<Tcharacter[]>([]);
    const [valor, setValor] = useState<string>("");
    useEffect(() => {
        try {
            const response = fetch(
                `https://swapi.dev/api/people`).then(async (response) => {
                    const data = await response.json();
                    setChars(data.results);
                }
                );
        } catch (e) {
            console.log(e);
        }
    },
        [])


    return (
        <div>
            <input type="text" value={valor} onChange={
                (e) => setValor(e.target.value)}
            ></input>
            <button onClick={() => {
                getChars(valor);
            }}>Buscar Personajes</button>
            <div>
                {chars.map(char =>
                    <Character key={char.name} name={char.name} eye_color={char.eye_color} gender={char.gender} mass={char.mass}/>
                )}
            </div>
        </div>
    )
}

export default Contador