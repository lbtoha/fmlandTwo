"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  comment: string;
}

const PostAComments: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      comment: "",
    });
  };

  return (
    <div className="comment-form-area">
      <h4 className="mb-30">Post A Comment:</h4>
      <form onSubmit={handleSubmit}>
        <div className="row gy-4">
          <div className="col-lg-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-12">
            <textarea
              name="comment"
              className="form-control"
              placeholder="Write a comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-lg-12 text-center">
            <button type="submit" className="btn btn-main mt-4">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostAComments;
