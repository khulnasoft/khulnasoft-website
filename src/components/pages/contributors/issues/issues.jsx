import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import issueIcon from './images/issue.svg';

const TITLE = 'Don’t know where to start?';
const DESCRIPTION =
  'Check our good first issues that help you onboard to Novu project and get first achievement.';

const Issues = ({ issues }) => {
  const [isShownMore, setIsShownMore] = useState(false);

  const list = useMemo(() => (isShownMore ? issues : issues.slice(0, 5)), [isShownMore, issues]);

  return (
    <section className="issues safe-paddings py-40 lg:py-32 md:py-20 sm:py-16">
      <div className="container-lg">
        <div className="mx-auto max-w-[787px] text-center">
          <Heading
            className="leading-tight md:text-5xl sm:text-4xl"
            tag="h2"
            size="xl"
            theme="white"
          >
            {TITLE}
          </Heading>
          <p className="mt-10 text-lg font-light leading-snug text-gray-9 md:text-base">
            {DESCRIPTION}
          </p>
        </div>
        <div className="mx-auto max-w-[904px]">
          <ul className="mt-10">
            {list.map(({ title, url, created_at }, index) => (
              <li
                className="relative flex items-center py-4 after:absolute after:bottom-0 after:right-0 after:h-px after:w-[calc(100%-54px)] after:bg-gray-3 last:after:hidden"
                key={index}
              >
                <div className="mr-3.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-white to-[rgba(255,255,255,0.6)]">
                  <img src={issueIcon} loading="lazy" alt="Issue icon" aria-hidden />
                </div>

                <Link
                  className="flex w-full justify-between space-x-3 font-light"
                  to={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{title}</span>
                  <span className="flex-shrink-0 text-sm sm:hidden">
                    opened {moment(created_at).fromNow()}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {!isShownMore && list.length !== issues.length && (
            <div className="mt-8 text-center">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link
                className="sm:text-sm"
                type="button"
                size="base"
                theme="primary-underline"
                tag="button"
                onClick={() => setIsShownMore(true)}
              >
                Show more issues
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Issues.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Issues;
