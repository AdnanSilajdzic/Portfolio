import React, { FC, useEffect } from 'react';
import Sketch from 'react-p5';
import catData from '../assets/doodles/cat.json';
import bycicleData from '../assets/doodles/bycicle.json';
import ambulanceData from '../assets/doodles/ambulance.json';
import basketballData from '../assets/doodles/basketball.json';
import bowtieData from '../assets/doodles/bowtie.json';
import pizzaData from '../assets/doodles/pizza.json';
import sunData from '../assets/doodles/sun.json';
import treeData from '../assets/doodles/tree.json';
import appleData from '../assets/doodles/apple.json';
import bananaData from '../assets/doodles/banana.json';
import bucketData from '../assets/doodles/bucket.json';
import cupData from '../assets/doodles/cup.json';
import clockData from '../assets/doodles/clock.json';
import iceCreamData from '../assets/doodles/ice cream.json';

let strokeIndex = 0;
let index = 0;
let cat: any;
let prevx: number | undefined, prevy: number | undefined;
let currentDrawingName: string;
let previousDrawingName: string[] = [];
const drawings = [
	{ name: 'Ice Cream', data: iceCreamData },
	{ name: 'Clock', data: clockData },
	{ name: 'Cup', data: cupData },
	{ name: 'Bucket', data: bucketData },
	{ name: 'Banana', data: bananaData },
	{ name: 'Apple', data: appleData },
	{ name: 'Bycicle', data: bycicleData },
	{ name: 'Cat', data: catData },
	{ name: 'Ambulance', data: ambulanceData },
	{ name: 'Basketball', data: basketballData },
	{ name: 'Bowtie', data: bowtieData },
	{ name: 'Pizza', data: pizzaData },
	{ name: 'Sun', data: sunData },
	{ name: 'Tree', data: treeData },
];

//define props
interface P5SketchProps {
	changePrediction: (name: string) => void;
}

const P5Sketch = ({ changePrediction }: P5SketchProps) => {
	const setup = (p5: any, canvasParentRef: any) => {
		p5.createCanvas(300, 300).parent(canvasParentRef);
		p5.background(255, 0);
		const drawing = drawings[Math.floor(Math.random() * drawings.length)];
		cat = drawing.data.drawing;
		currentDrawingName = drawing.name;
	};

	const draw = (p5: any) => {
		if (cat) {
			let x = cat[strokeIndex][0][index];
			let y = cat[strokeIndex][1][index];
			p5.stroke(255);
			p5.strokeWeight(3);
			if (prevx !== undefined) {
				p5.line(prevx, prevy, x, y);
			}
			index++;
			if (index === cat[strokeIndex][0].length) {
				strokeIndex++;
				prevx = undefined;
				prevy = undefined;
				index = 0;
				if (strokeIndex === cat.length) {
					cat = undefined;
					strokeIndex = 0;
					if (previousDrawingName.length === drawings.length - 1) {
						previousDrawingName = [];
					}
					previousDrawingName.push(currentDrawingName);
					setTimeout(() => {
						let drawing = drawings[Math.floor(Math.random() * drawings.length)];
						while (previousDrawingName.includes(drawing.name)) {
							drawing = drawings[Math.floor(Math.random() * drawings.length)];
						}
						cat = drawing.data.drawing;
						changePrediction(drawing.name);
						currentDrawingName = drawing.name;
						p5.clear();
					}, 1300);
				}
			} else {
				prevx = x;
				prevy = y;
			}
		}
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketch;
