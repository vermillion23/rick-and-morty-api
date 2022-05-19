import {useState, useEffect} from 'react';
import './App.css';
import CardsList from "./Components/CardsList/CardsList";
import Header from "./Components/AppBar/AppBar";
import Search from "./Components/Search/Search";
import Container from "@mui/material/Container";

function App() {

    let [pageNumber, setPageNumber] = useState(1);
    let [fetchedData, updateFetchedData] = useState([]);
    let {info, results} = fetchedData;

    let api =  `https://rickandmortyapi.com/api/character/?page${pageNumber}`;
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
        }, [api])


  return (
    <>
        <Header />
        <Container
            sx={{
                mt: '1rem'
            }}
        >
            <Search
                    // value={search}
            />
            <CardsList results={results}/>
            {/*<div>{data.name}</div>*/}
        </Container>

    </>
  );
}

export default App;
