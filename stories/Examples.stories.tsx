import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, Props } from '../src';

const meta: Meta = {
  title: 'Examples',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <Box children="This is an example component" font="mono" {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

export const Card = () => (
  <Box maxW="lg" flex>
    <Box flex="none" w={48} relative>
      <Box
        as="img"
        src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </Box>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-xl font-semibold">
          Classic Utility Jacket
        </h1>
        <div className="text-xl font-semibold text-gray-500">$110.00</div>
        <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
          In stock
        </div>
      </div>
      <div className="flex items-baseline mt-4 mb-6">
        <div className="space-x-2 flex">
          <label>
            <input
              className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg"
              name="size"
              type="radio"
              value="xs"
              checked
            />
            XS
          </label>
          <label>
            <input
              className="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="s"
            />
            S
          </label>
          <label>
            <input
              className="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="m"
            />
            M
          </label>
          <label>
            <input
              className="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="l"
            />
            L
          </label>
          <label>
            <input
              className="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="xl"
            />
            XL
          </label>
        </div>
        <div className="ml-auto text-sm text-gray-500 underline">
          Size Guide
        </div>
      </div>
      <div className="flex space-x-3 mb-4 text-sm font-medium">
        <div className="flex-auto flex space-x-3">
          <button
            className="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
            type="submit"
          >
            Buy now
          </button>
          <button
            className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
            type="button"
          >
            Add to bag
          </button>
        </div>
        <button
          className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
          type="button"
          aria-label="like"
        >
          <svg width="20" height="20" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
      <p className="text-sm text-gray-500">
        Free shipping on all continental US orders.
      </p>
    </form>
  </Box>
);

export const DescriptionList = () => (
  <Box bg="white" overflow="hidden" shadow>
    <Box px={6} py={5}>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Applicant Information
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Personal details and application.
      </p>
    </Box>
    <div className="border-t border-gray-200">
      <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Full name</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Margot Foster
          </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Application for</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Backend Developer
          </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Email address</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            margotfoster@example.com
          </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Salary expectation
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            $120,000
          </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">About</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
            incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
            consequat sint. Sit id mollit nulla mollit nostrud in ea officia
            proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit
            deserunt qui eu.
          </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Attachments</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
              <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div className="w-0 flex-1 flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 flex-1 w-0 truncate">
                    resume_back_end_developer.pdf
                  </span>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div className="w-0 flex-1 flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 flex-1 w-0 truncate">
                    coverletter_back_end_developer.pdf
                  </span>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </Box>
);
