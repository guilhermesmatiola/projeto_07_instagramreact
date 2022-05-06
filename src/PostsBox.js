import Post from "./Post";

const posts =[{
    usersrc:"assets/img/meowed.svg",
    user:"meowed",
    postimg: "assets/img/gato-telefone.svg",
    likeimg: "assets/img/respondeai.svg",
    likeuser: "respondeai",
    likes: "101.523"
  },{
    usersrc:"assets/img/barked.svg",
    user:"barked",
    postimg: "assets/img/dog.svg",
    likeimg: "assets/img/adorable_animals.svg",
    likeuser: "adorable_animals",
    likes:"99.159"
  }
];
export default function PostsBox(){

    return(
        <div class="posts">
             {posts.map((posts) => (<Post usersrc={posts.usersrc} user={posts.user} postimg={posts.postimg} likeimg={posts.likeimg} likeuser={posts.likeuser} liskes={posts.likes}/>))}      
        </div>
    );
}

