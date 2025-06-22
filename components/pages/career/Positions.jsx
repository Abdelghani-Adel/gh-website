"use client";

import { applyForPosition, getSectionData } from "@/utils/ApiService";
import { CheckCircle, Mail, MapPin, Send, Upload, X } from "lucide-react";
import { useEffect, useState } from "react";

const Positions = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cv: null,
    position: "",
    coverLetter: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSectionData(13);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
    setFormData((prev) => ({
      ...prev,
      position: position.title,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        cv: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData for file upload
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("position", formData.position);
    submitData.append("coverLetter", formData.coverLetter);
    if (formData.cv) {
      submitData.append("cv", formData.cv);
    }

    try {
      // Replace with your actual API endpoint
      const response = await applyForPosition(submitData);

      if (response.ok) {
        alert("Application submitted successfully!");
        setSelectedPosition(null);
        setFormData({
          name: "",
          email: "",
          cv: null,
          position: "",
          coverLetter: "",
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  const closeModal = () => {
    setSelectedPosition(null);
    setFormData({
      name: "",
      email: "",
      cv: null,
      position: "",
      coverLetter: "",
    });
  };

  if (!data) {
    return null;
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-second mb-4">
              {data.title}
            </h2>
            <p className="text-xl text-gray-600">{data.subTitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.positions.map((position) => (
              <div
                key={position.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {position.location && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                      )}
                      {position.type && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {position.type}
                        </span>
                      )}
                      {position.experience && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                          {position.experience}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {position.description}
                </p>

                {position.skills && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => handlePositionSelect(position)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  Apply Now
                  <Send className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Apply for {selectedPosition.title}
              </h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Position Info */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">
                  Position Details:
                </h4>
                <p className="text-gray-700 mb-4">
                  {selectedPosition.description}
                </p>

                {selectedPosition.skills && (
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Required Skills:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedPosition.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Application Guidelines */}
              {data.applicationGuidelines && (
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Application Guidelines:
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    {data.applicationGuidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{guideline}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Application Form */}
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Position (readonly) */}
                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-600"
                  />
                </div>

                {/* CV Upload */}
                <div>
                  <label
                    htmlFor="cv"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Upload CV/Resume *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                    />
                    <label
                      htmlFor="cv"
                      className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-colors flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <Upload className="w-5 h-5" />
                      {formData.cv
                        ? formData.cv.name
                        : "Click to upload CV (PDF, DOC, DOCX)"}
                    </label>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 border-2 border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Positions;
