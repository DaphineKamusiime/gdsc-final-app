import React from "react";
import "./content.css";
import { useUserAuth } from "../../utils/UserAuthContext";

function Content() {
  const { user } = useUserAuth();
  return (
    <div className="content-container">
      <h2 className="text-black  grid place-items-center h-[70px] text-5xl font-bold">
        Hey {user.email}, your'e welcome!
      </h2>
      <img
        className="top-0"
        src="https://user-images.githubusercontent.com/107240847/232211732-e0d11b28-5b4a-4cfc-b28b-8b3c3395a192.jpg"
        alt="..."
        height={600}
        width={1200}
      />
      <div className="p-12">
        <h2 className="font-bold text-3xl">On going Proposed Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <p class="text-gray-700 text-base">
                {" "}
                Education initiatives for underprivileged children: This could
                involve setting up after-school programs or providing access to
                educational resources in low-income communities.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <p class="text-gray-700 text-base">
                Mental health awareness campaigns: This could involve creating
                and promoting resources to help people recognize and manage
                mental health issues.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <p class="text-gray-700 text-base">
                Health and sanitation initiatives: This could involve projects
                to improve access to healthcare, promote healthy habits, and
                prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <p class="text-gray-700 text-base">
                Disaster relief and preparedness: This could involve initiatives
                to help communities prepare for natural disasters and provide
                relief in the aftermath.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <p class="text-gray-700 text-base">
                {" "}
                Women's empowerment initiatives: This could involve initiatives
                to increase access to education, job opportunities, and
                resources for women in disadvantaged communities.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <p class="text-gray-700 text-base">
                Access to technology: This could involve projects to increase
                access to technology in low-income communities, including access
                to computers, internet connectivity, and digital literacy
                resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <h2 className="font-bold text-3xl">Upcoming events</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="px-6 py-4">
            <p class="text-gray-700 text-base">No events registered yet</p>
          </div>
        </div>
      </div>
      <div className="p-12">
        <h2 className="font-bold text-3xl">On going events</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <p class="text-gray-700 text-base">2023 Solutions Challenge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* <div
        className="background"
        style={{ backgroundImage: "url(/google.jpg)" }}
      ></div><br/><br/> */
  );
}

export default Content;
