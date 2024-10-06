import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from '../../hooks/formHooks';
import testAPI from '../../api/testApi';
// Import CKEditor for content editing
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const QuizForm = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken')


  const initialValues = {
      title: '',
      content: '',
      image: null,
  };

 
  const submitCallBack = async (values) => {
      const objectData = {
        title: values.title,
        content: values.content,
      }

    //   formData.append('title', values.title);
    //   formData.append('content', values.content);
    //   if (values.image) {
    //       formData.append('image', values.image);
    //   }

      try {
          
          await testAPI.createTest(objectData, accessToken);
          navigate('/');  
      } catch (err) {
          console.error('Error:', err);
      }
  };

  // Use the useForm hook
  const { values, changeStateHandler, submitHandler } = useForm(initialValues, submitCallBack);

  return (
      <div className="max-w-2xl mx-auto p-4">
          <form onSubmit={submitHandler}>
              <div className="mb-6">
                  <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">
                      Title
                  </label>
                  <input
                      type="text"
                      id="title"
                      name="title"
                      value={values.title}
                      onChange={changeStateHandler}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                      required
                  />
              </div>

              <div className="mb-6">
                  <label htmlFor="content" className="block text-lg font-medium text-gray-800 mb-1">
                      Content
                  </label>
                  <CKEditor
                      editor={ClassicEditor}
                      data={values.content}
                      onChange={(event, editor) => {
                          const data = editor.getData();
                          changeStateHandler({ target: { name: 'content', value: data } });
                      }}
                  />
              </div>

              <div className="mb-6">
                  <label htmlFor="image" className="block text-lg font-medium text-gray-800 mb-1">
                      Image
                  </label>
                  <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={(e) => changeStateHandler({ target: { name: 'image', value: e.target.files[0] } })}
                      className="w-full"
                  />
              </div>

              <div className="flex justify-end">
                  <button
                      type="submit"
                      className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"
                  >
                      Submit
                  </button>
              </div>
          </form>
      </div>
  );
};


export default QuizForm;