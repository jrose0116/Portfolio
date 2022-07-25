const tabElements = [
    {
        id: 'portfolio',
        triggerEl: document.querySelector('#portfolio-tab'),
        targetEl: document.querySelector('#portfolio')
    },
    {
        id: 'gauntic',
        triggerEl: document.querySelector('#gauntic-tab'),
        targetEl: document.querySelector('#gauntic')
    },
    {
        id: 'collabracart',
        triggerEl: document.querySelector('#collabracart-tab'),
        targetEl: document.querySelector('#collabracart')
    },
    {
        id: 'lease',
        triggerEl: document.querySelector('#lease-tab'),
        targetEl: document.querySelector('#lease')
    },
    {
        id: 'tiling',
        triggerEl: document.querySelector('#tiling-tab'),
        targetEl: document.querySelector('#tiling')
    },
    {
        id: 'small',
        triggerEl: document.querySelector('#small-tab'),
        targetEl: document.querySelector('#small')
    }
];

const options = {
    defaultTabId: 'portfolio',
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-500',
};

const tabs = new Tabs(tabElements, options);