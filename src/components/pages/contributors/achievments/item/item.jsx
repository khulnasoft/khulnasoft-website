import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Item = ({ icon, title, description, users, theme }) => (
  <div className="col-start-2 col-end-12 flex border-b border-dashed border-gray-5 py-20 first:pt-0 last:border-none last:pb-0">
    {icon}
    <div className="ml-34 flex w-full flex-col">
      <h3 className="text-4xl leading-tight">{title}</h3>
      <div className="mt-4 text-lg font-light leading-snug text-gray-10">{description}</div>

      <div className="mt-10 grid w-full grid-cols-2 gap-8">
        {users.map(({ userName, avatar, lastActivity }, index) => (
          <div
            className={clsx(
              'flex items-center rounded-xl p-5',
              theme === 'gray' ? 'bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)]' : 'bg-black'
            )}
            key={index}
          >
            <img
              className="mr-3 rounded-full"
              width={48}
              height={48}
              src={avatar}
              loading="lazy"
              alt={`${userName} avatar`}
            />
            <div className="flex flex-col">
              <span className="text-lg leading-denser text-primary-1">@{userName}</span>
              <span className="mt-1.5 text-sm leading-denser">
                Last activity: <span className="text-secondary-2">{lastActivity}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Item.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      avatar: PropTypes.element.isRequired,
      lastActivity: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.string,
};

Item.defaultProps = {
  theme: null,
};

export default Item;