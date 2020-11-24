import { useState, useEffect } from 'react';
import firebase from '../config/firebase';
import Link from 'next/link';

const GetData = () => {
    const ref = firebase.firestore().collection('documents').doc();
    const [collections, setBlogs] = useState([]);
    useEffect(() => {
        firebase.firestore()
        .collection('documents')
        .onSnapshot(snap => {
          const collections = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setBlogs(collections);
        });
    }, []);
    
    return (
      <div>

        <table className='table table-striped'>
        <thead className='thead-dark'>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Places</th>
            <th scope="col">Thumbnail</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
        {collections.map(document =>
            <tr>
                <th scope="row">{document.id}</th>
                <td>{document.title}</td>
                <td>{document.thumbnail}</td>
                <td>
                    <Link href="/content/[id]" as={'/content/' + document.id}>
                        <a>Click</a>
                    </Link>
                </td>
            </tr>
        )}
        </tbody>
        </table>
      </div>
    )
}
export default GetData;