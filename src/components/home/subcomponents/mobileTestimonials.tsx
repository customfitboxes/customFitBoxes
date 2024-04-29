/* eslint-disable react/jsx-key */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import user1 from '../../../static/user1.svg';
import user2 from '../../../static/user2.svg';
import user3 from '../../../static/user3.svg';
import { ReviewUser } from './reviewUser';

const myData = [user1, user2, user3];

export const MobileTestimonials = () => {
  return (
    <div
      className="mt-14 flex flex-col gap-y-14 p-4"
      style={{
        background: '#EFFCF9',
      }}
    >
      {myData.map((d: any, ind: any) => (
        <div className="flex flex-col gap-y-5" key={ind + 1}>
          <ReviewUser img={d} setTab={() => {}} tab={ind} value={ind} />
          <div className="relative mx-auto">
            <p className="fw_600 text-sm">
              {ind === 0 &&
                'Excellent service from the company, I like this company'}
              {ind === 1 && 'Its was a great experience'}
              {ind === 2 &&
                "it helps me in my difficult times. It's my other brain!"}
            </p>
            <div className="mt-2 flex items-center gap-x-1 text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="mt-8 text-xs">
              {ind === 0 &&
                "Since Day 1, it's been nothing but incredible. The PackMojo team has been there for us, answering ALL of our questions, concerns, and doing it with patience and efficiency. PackMojo is a fantastic brand that offers high-quality service and boxes and we couldn't be more grateful for what they have done for us so far! Definitely looking to return for more boxes for sure!"}
              {ind === 1 &&
                "The PackMojo team has been there for us, answering ALL of our questions, concerns, and doing it with patience and efficiency. Definitely looking to return for more boxes for sure! Since Day 1, it's been nothing but incredible. PackMojo is a fantastic brand that offers high-quality service and boxes and we couldn't be more grateful for what they have done for us so far!"}
              {ind === 2 &&
                "Definitely looking to return for more boxes for sure! The PackMojo team has been there for us, answering ALL of our questions, concerns, and doing it with patience and efficiency. PackMojo is a fantastic brand that offers high-quality service and boxes and we couldn't be more grateful for what they have done for us so far! Since Day 1, it's been nothing but incredible."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
