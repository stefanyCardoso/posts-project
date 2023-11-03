/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import './styles.css';
import { Component } from  'react';
import { loadPosts } from '../../utils/load-posts';
import { Post } from '../../components/Post';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput/inde';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: '',
  };

  async componentDidMount(){ 
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice( page , postsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {

    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({posts, page: nextPage})
  }

  handleChange = (e) => {

    const { value } = e.target;
    this.setState({searchValue: value})

  }

  render () {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state ;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

    return (
      <section className='container'>

        <div className='div-input'>
          {
            !!searchValue && (
              <h1 className='h1-text'>Pesquisando... {searchValue} </h1>
            )
          }
          
          <TextInput 
            handleChange={this.handleChange}
            searchValue={searchValue}
          />
        </div>
        
        {filteredPosts.length > 0  && (
          <Post posts={filteredPosts} />
        )}

        {filteredPosts.length === 0  && (
          <p className='p-text'>Sem resultados... :/</p>
        )}

        <div className='btn-container'>
          {
            !searchValue && (
              <Button 
                text='teste' 
                onClick={this.loadMorePosts}
                disabled={noMorePosts}
              />
            )
          }
        </div>

      </section>
    )
  }
}

export default Home;
