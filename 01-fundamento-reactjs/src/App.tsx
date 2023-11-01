import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4E03AQFpPnD0BGpm4A/profile-displayphoto-shrink_400_400/0/1695948782445?e=1701907200&v=beta&t=OCze6qCBkxoq6gz8Pc716KpeuyGsnyVDkvzel-dNYf0',
      name: 'Lucas Francisco',
      role: 'Solftware Develope'
    },
    content: [ 
      { type: 'paragraph', content:'Um breve exemplo' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusamus fugiat consequuntur cumque voluptatum porro rem iste nisi suscipit sapiente nesciunt explicabo, necessitatibus officia dolorem itaque ratione, libero voluptates voluptatibus.' },
      {type: 'link', content: 'Espaço.decontato@*****.com'}
    ],
    publishedAt: new Date('2023-10-01 20:00:00')

  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lukasSales.png',
      name: 'Lucas Sales',
      role: 'Web Develope'
    },
    content: [ 
      { type: 'paragraph', content:'ABC' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusamus fugiat consequuntur cumque voluptatum porro rem iste nisi suscipit sapiente nesciunt explicabo, necessitatibus officia dolorem itaque ratione, libero voluptates voluptatibus.' },
      {type: 'link', content: 'Espaço.decontato@*****.com'}
    ],
    publishedAt: new Date('2023-10-05 21:00:00')
  },
];


function App() {


  return (
    <div>
      <Header />


      <div className={styles.wrapper}>

          <Sidebar />
        <main>

          {posts.map(post => {
            return (
              <Post
              key={post.id}
              post={post} 
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}

export default App

