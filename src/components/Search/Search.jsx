import Friend from './Friend/Friend';
import style from './Search.module.css';

const Search = (props) => {

    const friendsElements = props.searchData.searchData
        .map( elem => <Friend lastName={elem.lastName} firstName={elem.firstName}
            midName={elem.midName} country={elem.location.country}
            city={elem.location.city} dateOfBirth={elem.dateOfBirth}/>);
    
        return (
        <div className={style.searchPageWrapper}>
            <h2 className={style.searchHeader}>Search friends</h2>
                {friendsElements}
            <div className={style.showMoreBtn}>Show more ...</div>
        </div>
    );
};

export default Search;