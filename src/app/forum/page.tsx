//TODO Refactor and remake Forum if need be!

'use client';
import React, { useState } from 'react';
import ForumComments from './__blocks/ForumComments';
import ForumHeader from './__blocks/ForumHeader';
import ForumPostButton from './__blocks/ForumPostButton';
import ForumRatings from './__blocks/ForumRatings';
import ForumAddPostModal from './__blocks/modal/ForumAddPostModal';

interface Post {
  id: number;
  title: string;
  content: string;
}

const Page: React.FC = () => {
  const [comments] = useState([
    { id: 1, author: 'User1', content: 'This is a great post!' },
    { id: 2, author: 'User2', content: 'I agree, very informative.' },
  ]);

  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreatePost = (title: string, content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      content,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <ForumHeader
        title="Forum Title"
        description="Welcome to our discussion board!"
      />
      <ForumPostButton onClick={handlePostButtonClick} />
      <ForumRatings initialRating="like" />
      <ForumComments comments={comments} />

      <ForumAddPostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleCreatePost}
      />

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Recent Posts</h3>
        <div className="space-y-4 mt-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-lg">{post.title}</h4>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
