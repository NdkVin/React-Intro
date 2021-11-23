import { useState, useEffect } from "react";
//components
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NewsList from "../components/NewsList";
//services
import { useParams } from "react-router";
import {getNews} from '../services/getNews'


function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const defaultSearch = "Google";
  const { id } = useParams();
  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true);
      const res = await getNews({
        SearchQuery: id || defaultSearch
      });

      if(!res) {
        setLoading(false);
        setError(true);

        return
      }

      setLoading(false);
      setArticles(res.articles);
    }

    fetchTechNews();
  }, [id])
  return (
    <>
      <Navbar />
      <Container>
        {loading && <Loading />}
        {error && <Error />}
        {(!loading && articles.length>0) && <NewsList articles={articles} />}
      </Container>
    </>
  );
}

export default App;
