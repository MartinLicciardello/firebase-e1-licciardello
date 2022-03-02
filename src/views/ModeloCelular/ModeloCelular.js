import React, { useState, useEffect } from 'react';
// REACT ROUTER DOM
import { useParams } from 'react-router-dom';
// FIREBASE
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

// COMPONENTS
import CardComponent from '../../components/CardComponent/CardComponent';


const ModeloCelular = () => {
	const [celularData, setCelularData] = useState([]);

	const modelo = useParams();

	const celularData = modelo.modelo;


	useEffect(() => {
		const getCelularData = async () => {
			const q = query(
				collection(db, 'celular'),
				where('nombre', '==', celularData)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log(querySnapshot);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setCelularData(docs);
		};
		getCelularData();
	}, [celularData]);

	return (
		<div>
			{celularData.map((data) => {
				return (
					<div>
						<CardComponent celularData={data} key={data.id} />
					</div>
				);
			})}
		</div>
	);
};

export default ModeloCelular;