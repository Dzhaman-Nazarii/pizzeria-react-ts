import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";

const initialState = {
	title: '',
	price: '',
	image: ''
}

const AddPizzaForm: FC = () => {
	const [newPiiza, setNewPiiza] = useState<{title: string, price: string, image: string}>(initialState);

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target)
	};

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		console.log(evt.target)
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="title"
				placeholder="Write a pizza name"
				value={newPiiza.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="price"
				placeholder="Pizza price"
				value={newPiiza.price}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="image"
				placeholder="Pizza image"
				value={newPiiza.image}
				onChange={handleChange}
			/>
			<button type="submit">Add to menu</button>
		</form>
	);
};

export default AddPizzaForm;
