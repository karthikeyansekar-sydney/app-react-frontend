import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users');

    return response.data;
  } catch (error) {
    return null;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts');

    return response.data;
  } catch (error) {
    return null;
  }
}

export const fetchPost_Photos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/post_photos');

    return response.data;
  } catch (error) {
    return null;
  }
}

export const fetchFollows = async () => {
  try {
    const response = await axios.get('http://localhost:3000/follows');

    return response.data;
  } catch (error) {
    return null;
  }
}

export const fetchLikes = async () => {
  try {
    const response = await axios.get('http://localhost:3000/likes');

    return response.data;
  } catch (error) {
    return null;
  }
}

export const fetchDislikes = async () => {
  try {
    const response = await axios.get('http://localhost:3000/dislikes');

    return response.data;
  } catch (error) {
    return null;
  }
}

export const fetchComments = async () => {
  try {
    const response = await axios.get('http://localhost:3000/comments');

    return response.data;
  } catch (error) {
    return null;
  }
}
