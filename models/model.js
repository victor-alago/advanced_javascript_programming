// In-memory array to store items
let items = [
    { id: 1, title: 'Sample Item 1', description: 'This is the first item' },
    { id: 2, title: 'Sample Item 2', description: 'This is the second item' }
];

// Function to get all items
function getAllItems() {
    return items;
}

// Function to get a single item by ID
function getItemById(id) {
    return items.find(item => item.id === id);
}

// Function to add a new item
function addItem(title, description) {
    const newItem = {
        id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
        title,
        description
    };
    items.push(newItem);
    return newItem;
}

// Function to update an item by ID
function updateItem(id, title, description) {
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        items[itemIndex] = { id, title, description };
        return items[itemIndex];
    }
    return null;
}

// Function to delete an item by ID
function deleteItem(id) {
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        return items.splice(itemIndex, 1)[0];
    }
    return null;
}

// Export functions for use in other files
module.exports = { getAllItems, getItemById, addItem, updateItem, deleteItem };