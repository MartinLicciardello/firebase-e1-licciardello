import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    collection,
    query,
    where,
    getDocs,
    documentId
} from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig';
import CardComponent from '../../components/CardComponent/CardComponent';

const CelularDetail = () => {
    const [celularData,setCelularData] = useState([]);
    // const id = useParams()
    // let celularId = id.id
    // console.log(celularId);
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
		const getCelular = async () => {
			const q = query(collection(db, 'celular'), where(documentId(), "==",id));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setCelularData(docs);
		};
		getCelular();
	}, []);
    return (
    <div>
        {celularData.map((data) => {
            return <CardComponent celularData = {data} key={data.id}/>;
        })}
    </div>
  )
}

export default CelularDetail