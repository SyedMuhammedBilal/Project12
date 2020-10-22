import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import gql from 'graphql-tag';
import Loader from '../components/Loader';
import Card from '../components/Card';
import './index.css';

const BookMarksQuery = gql`{
    bookmark {
        url,
        desc,
    }
}`;

const addBookMarkMutation = gql`
    mutation addBookmark($url: String!, $desc: String!) {
        addBookmark(url: $url, desc: $desc) {
            url, 
        }
    }
`

function Home() {
    let textField;
    let desc;

    const [addBookmark] = useMutation(addBookMarkMutation);

    const addBookMark = () => {
        addBookmark({
            variables: {
                url: textField.value,
                desc: desc.value,
            },
            refetchQueries: [{query: BookMarksQuery}],
        });
        console.log('textField', textField.value)
        console.log('desc', desc.value)
    }

    const { data, loading, error } = useQuery(BookMarksQuery);
    
    if(loading) return <Loader />
    if(error) return <h1>Error...</h1>
    console.table(data.bookmark[0].url);

    return (
        <div>
            {/*<Header />*/}
            <div className='form'>
                <form className='Form'>
                    <h1>BookMark App</h1>
                    <input 
                        className='inputBox'
                        type="text" 
                        placeholder="Site Name"
                        ref={node => 
                            textField=node
                        } 
                    />
                    <input 
                        className='inputBox'
                        type="text" 
                        placeholder="URL"
                        ref={node => 
                            desc=node
                        } 
                    />
                    <button className='sign-btn' onClick={addBookMark}>Add</button>
                </form>
            </div>
                    <div className='list-head'>
                       <h1>Bookmark List</h1>
                    </div>
            <div>
                    {
                        data.bookmark.map((bm, index) => {
                            console.log(bm)
                            return(
                                <Card key={index} desc={bm.url} url={bm.desc} />
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Home
