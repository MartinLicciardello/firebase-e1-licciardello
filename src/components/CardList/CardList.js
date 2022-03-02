import React, { useState, useEffect } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import './CardList.css';
// FIRBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
//RRD
import {Link} from 'react-router-dom';

export const CardList = () => {
    const [celularesData, setCelularesData] = useState([]);


    useEffect(() => {
		const getCelulares = async () => {
			const q = query(collection(db, 'celular'));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setCelularesData(docs);
		};
		getCelulares();
	}, []);


  return (
    <div className='CardListContainer'>{celularesData.map((data) => {
        return(
            <Link to={`details/${data.id}`}> 
            <CardComponent celularesData={data} key={data.id} />
            </Link>
        ) 
    })}</div>
  )
}
