const { useState } = React;

export const ColorPicker = () => {

	const [color, setColor] = useState("#ffffff")
	const handleChangeColor = (e)=> {
		setColor((prevColor) => (e.target.value));
	}

	return (
		<div
			id="color-picker-container"
			style={{backgroundColor: color}}
		>
			<input
				type="color"
				name="color"
				id="color-input"
				value={color}
				onChange={handleChangeColor}
			/>
		</div>
	)
};