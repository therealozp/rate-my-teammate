import React, { useEffect, useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import ProfileComponent from './ProfileComponent';
import styles from '../../styles/Home.module.css';

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
	x: 0,
	y: 0,
	scale: 1,
	// rot: -10 + Math.random() * 20,
	delay: i * 100,
});
// const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform

const trans = (r, s) => ` rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck({ activeList, setCurrentActive, removeItemAtIndex }) {
	const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
	const [props, api] = useSprings(activeList.length, (i) => ({
		...to(i),
		// from: from(i),
	})); // Create a bunch of springs using the helpers above
	// console.log(props);
	const [verticalSpeed, setVerticalSpeed] = useState(0.2);
	useEffect(() => {
		if (activeList.length === 1) {
			setVerticalSpeed(2000);
		} else {
			if (verticalSpeed !== 0.2) {
				setVerticalSpeed(0.2);
			}
		}
	}, [activeList]);

	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(
		({
			args: [index],
			active,
			movement: [mx],
			direction: [xDir],
			velocity: [vx],
		}) => {
			const trigger = vx > verticalSpeed; // If you flick hard enough it should trigger the card to fly out

			// If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
			if (!active && trigger) {
				gone.add(index);
				setCurrentActive(index - 1);
				setRemoveTimer(index);
			}

			api.start((i) => {
				if (index !== i) return; // We're only interested in changing spring-data for the current spring
				const isGone = gone.has(index);
				const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
				const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0); // How much the card tilts, flicking it harder makes it rotate faster
				const scale = active ? 1.1 : 1; // Active cards lift up a bit
				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
				};
			});
		}
	);
	// async removal instead of instant

	const setRemoveTimer = (index) => {
		// console.log(index);
		setTimeout(() => {
			removeItemAtIndex(index);
		}, 250);
	};

	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return (
		<>
			{props.map(({ x, y, scale, rot }, i) => (
				<animated.div
					className={styles.deck}
					key={i}
					style={{ x, y, touchAction: 'none' }}
				>
					{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
					<animated.div
						{...bind(i)}
						style={{
							transform: interpolate([rot, scale], trans),
							touchAction: 'none',
							transition: 'transform 200ms ease',
						}}
					>
						<ProfileComponent name={activeList[i].name} />
					</animated.div>
				</animated.div>
			))}
		</>
	);
}

export default Deck;
