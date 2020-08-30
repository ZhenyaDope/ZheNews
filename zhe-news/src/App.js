import React, {Component} from 'react';
import './App.css';
import Post from "./components/Post";
import axios from 'axios';
import {connect} from "react-redux";
import { Container, Header , Button, Item , Loader} from "semantic-ui-react";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

    }


    fetchPosts() {
        const {setPosts} = this.props
        axios.get('https://5f4a5e1341cb390016de3429.mockapi.io/posts')
            .then(({data})=>{
                setPosts(data)
        })

    }

    componentWillMount() {
        this.fetchPosts();
    }

    render(){
        const { posts } = this.props;
        const { items } = posts;
        return (
            <Container className="App">
                <Header as='h2'>Категория {this.props.category.category}</Header>
                <div>
                    <Button.Group basic>
                        <Button onClick={()=>this.props.changeCategory('IT')}>Новости из мира IT</Button>
                        <Button onClick={()=>this.props.changeCategory('FORBES')}>Бизнес новости</Button>
                        <Button onClick={()=>this.props.changeCategory('GAME')}>Про игры</Button>
                    </Button.Group>
                </div>

                <Item.Group divided>
                {

                    items.length <= 0
                        ? <Loader active inline='centered' />
                        : items.map((item,index)=>(

                                <Post
                                    key={index}
                                    {...item}
                                />))


                }
                </Item.Group>
            </Container>
        );
    }
}

function mapStateToProps (props) {
    return {
        loading: true,
        ...props
    };
};

function mapDispatchToProps (dispatch) {
    return {
        setPosts: data => dispatch({type:'SET_POSTS',payload: data}),
        changeCategory: category => dispatch({type:'CHANGE_CATEGORY',payload: category})
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);