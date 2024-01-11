import React, { useEffect } from 'react'
import NewsItem from '../components/NewsItem'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryNewsStart } from '../redux/actions/news.action';
import { NewsState } from '../redux/reducers/news.reducer';

export default function Category() {
    let {slug} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoryNews = useSelector((state: NewsState) => state.categoryNews);    

    useEffect(() => {
        if(slug) {
            dispatch(getCategoryNewsStart(slug))
        }else {
            navigate('/');
        }
    }, [slug, dispatch, navigate])
    
    return (
        <div className="container">
            <div className="row">
                {
                    categoryNews.length > 0 ? categoryNews.map((cN:any, i:number) => (
                        <NewsItem item={cN} key={i} />
                    )) : <p className="text-danger display-5">No News Found</p>
                }
            </div>
        </div>
    )
}
