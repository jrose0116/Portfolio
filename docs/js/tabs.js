// Tabs class/Default object from flowbite
const Default = {
    defaultTabId: null,
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => { }
}

class Tabs {
    constructor(items = [], options = {}) {
        this._items = items
        this._activeTab = options ? this.getTab(options.defaultTabId) : null
        this._options = { ...Default, ...options }
        this._init()
    }

    _init() {
        if (this._items.length) {
            // set the first tab as active if not set by explicitly
            if (!this._activeTab) {
                this._setActiveTab(this._items[0])
            }

            // force show the first default tab
            this.show(this._activeTab.id, true)

            // show tab content based on click
            this._items.map(tab => {
                tab.triggerEl.addEventListener('click', () => {
                    this.show(tab.id)
                })
            })
        }
    }

    getActiveTab() {
        return this._activeTab
    }

    _setActiveTab(tab) {
        this._activeTab = tab
    }

    getTab(id) {
        return this._items.filter(t => t.id === id)[0]
    }

    show(id, forceShow = false) {
        const tab = this.getTab(id)

        // don't do anything if already active
        if (tab === this._activeTab && !forceShow) {
            return
        }

        // hide other tabs
        this._items.map(t => {
            if (t !== tab) {
                t.triggerEl.classList.remove(...this._options.activeClasses.split(" "));
                t.triggerEl.classList.add(...this._options.inactiveClasses.split(" "));
                t.targetEl.classList.add('hidden')
                t.triggerEl.setAttribute('aria-selected', false)
            }
        })

        // show active tab
        tab.triggerEl.classList.add(...this._options.activeClasses.split(" "));
        tab.triggerEl.classList.remove(...this._options.inactiveClasses.split(" "));
        tab.triggerEl.setAttribute('aria-selected', true)
        tab.targetEl.classList.remove('hidden')

        this._setActiveTab(tab)

        // callback function
        this._options.onShow(this, tab)
    }

}

const tabElements = [
    {
        id: 'portfolio',
        triggerEl: document.querySelector('#portfolio-tab'),
        targetEl: document.querySelector('#portfolio')
    },
    {
        id: 'wiki',
        triggerEl: document.querySelector('#wiki-tab'),
        targetEl: document.querySelector('#wiki')
    },
    {
        id: 'ecommerce',
        triggerEl: document.querySelector('#ecommerce-tab'),
        targetEl: document.querySelector('#ecommerce')
    },
    {
        id: 'coverletter',
        triggerEl: document.querySelector('#coverletter-tab'),
        targetEl: document.querySelector('#coverletter')
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
        id: 'sorting',
        triggerEl: document.querySelector('#sorting-tab'),
        targetEl: document.querySelector('#sorting')
    },
    {
        id: 'flow',
        triggerEl: document.querySelector('#flow-tab'),
        targetEl: document.querySelector('#flowsolve')
    },
    {
        id: 'carcalc',
        triggerEl: document.querySelector('#carcalc-tab'),
        targetEl: document.querySelector('#carcalc')
    },
];

const options = {
    defaultTabId: 'portfolio',
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-500',
};

const tabs = new Tabs(tabElements, options);