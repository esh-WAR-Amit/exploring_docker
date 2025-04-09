import React from "react";
import { FaUserCircle, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Community = ({ user }) => {
  return (
    <>
      <div className="mb-8 min-w-[310px]">
        <div className="md:px-12 lg:px-[120px] w-full">
          <div className="bg-gray-200 border-b-2 border-[#2a6c75] md:flex items-center py-3 rounded-md mt-6">
            <div className="px-[1px]">
              <img
                width={100}
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawYwCclbjKW7--FtRGwDUIsiaRoBwnEvfJg&usqp=CAU"
                alt="community"
                className="w-full object-cover h-[200px] md:min-w-[350px] md:w-[350px] md:h-[250px] rounded-lg"
              />
            </div>
            <div className="px-4 w-full">
              <div className="flex items-center gap-4 my-2">
                <div>
                  <FaUserCircle
                    className="text-[#2a6c75]"
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div>
                  <div className="text-sm text-[#2a6c75] font-bold">
                    Amit -
                    <span className="text-gray-700 font-semibold text-xs">
                      {" "}
                      Bihar
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">1 day</div>
                </div>
              </div>
              <div className="text-sm font-semibold mt-1">
                What are common symptoms, causes, and treatments for a specific
                skin disease?
              </div>
              <div className="text-sm mt-1">
                Can you provide a concise overview of a specific skin disease,
                detailing its symptoms, causes, risk factors, and available
                treatment options, while also highlighting any potential
                complications or preventive measures?
              </div>
              <div className="flex items-center justify-between md:px-12 text-xs text-gray-700 mt-2">
                <div>Reviews</div>
                <div>
                  <span>6</span> answers
                </div>
              </div>
              <div className="border-b-[1px] border-gray-400 mt-1"> </div>
              <div className="flex items-center justify-around mt-2">
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-gray-700" />
                  <div className="text-xs">Upvote</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaThumbsDown className="text-gray-700" />
                  <div className="text-xs">Downvote</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 border-b-2 border-[#2a6c75] md:flex items-center py-3 rounded-md mt-6">
            <div className="px-[1px]">
              <img
                width={100}
                height={100}
                src="https://nationaleczema.org/wp-content/uploads/2020/02/Contact_dermatitis.jpg"
                alt="community1"
                className="w-full object-cover h-[200px] md:min-w-[350px] md:w-[350px] md:h-[250px] rounded-lg"
              />
            </div>
            <div className="px-4 w-full">
              <div className="flex items-center gap-4 my-2">
                <div>
                  <FaUserCircle
                    className="text-[#2a6c75]"
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div>
                  <div className="text-sm text-[#2a6c75] font-bold">
                    Amit -
                    <span className="text-gray-700 font-semibold text-xs">
                      {" "}
                      Bihar
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">1 day</div>
                </div>
              </div>
              <div className="text-sm font-semibold mt-1">
                What are common symptoms, causes, and treatments for a specific
                skin disease?
              </div>
              <div className="text-sm mt-1">
                Can you provide a concise overview of a specific skin disease,
                detailing its symptoms, causes, risk factors, and available
                treatment options, while also highlighting any potential
                complications or preventive measures?
              </div>
              <div className="flex items-center justify-between md:px-12 text-xs text-gray-700 mt-2">
                <div>Reviews</div>
                <div>
                  <span>6</span> answers
                </div>
              </div>
              <div className="border-b-[1px] border-gray-400 mt-1"> </div>
              <div className="flex items-center justify-around mt-2">
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-gray-700" />
                  <div className="text-xs">Upvote</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaThumbsDown className="text-gray-700" />
                  <div className="text-xs">Downvote</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 border-b-2 border-[#2a6c75] md:flex items-center py-3 rounded-md mt-6">
            <div className="px-[1px]">
              <img
                width={100}
                height={100}
                src="data:image/jpeg;base64,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"
                alt="community2"
                className="w-full object-cover h-[200px] md:min-w-[350px] md:w-[350px] md:h-[250px] rounded-lg"
              />
            </div>
            <div className="px-4 w-full">
              <div className="flex items-center gap-4 my-2">
                <div>
                  <FaUserCircle
                    className="text-[#2a6c75]"
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div>
                  <div className="text-sm text-[#2a6c75] font-bold">
                    Amit -
                    <span className="text-gray-700 font-semibold text-xs">
                      {" "}
                      Bihar
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">1 day</div>
                </div>
              </div>
              <div className="text-sm font-semibold mt-1">
                What are common symptoms, causes, and treatments for a specific
                skin disease?
              </div>
              <div className="text-sm mt-1">
                Can you provide a concise overview of a specific skin disease,
                detailing its symptoms, causes, risk factors, and available
                treatment options, while also highlighting any potential
                complications or preventive measures?
              </div>
              <div className="flex items-center justify-between md:px-12 text-xs text-gray-700 mt-2">
                <div>Reviews</div>
                <div>
                  <span>6</span> answers
                </div>
              </div>
              <div className="border-b-[1px] border-gray-400 mt-1"> </div>
              <div className="flex items-center justify-around mt-2">
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-gray-700" />
                  <div className="text-xs">Upvote</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaThumbsDown className="text-gray-700" />
                  <div className="text-xs">Downvote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
