import React from 'react';
import { addArticles } from '../actions';
import { connect } from 'react-redux';

export function Home (props) {
    return (
        <React.Fragment>
            { props.articles }
        </React.Fragment>

    )
}

function mapDispatchToProps(dispatch){
    return {
        add : (input) => dispatch(addArticles(input))
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);