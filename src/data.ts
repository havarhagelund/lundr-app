let orgs = [
    {
        name: 'Signum',
        id: 'signum',
        users: ['501', '502'],
    },
    {
        name: 'Spectre',
        id: 'spectre',
        users: ['505'],
    },
];

let boards = [
    {
        name: 'Sales Board',
        id: '201',
        orgId: '101',
    },
    {
        name: 'Projects Board',
        id: '203',
        orgId: '101',
    },
    {
        name: 'Spectre Board',
        id: '202',
        orgId: '102',
    },
];

export function createBoard(name: string, orgId: string) {
    const id = Math.floor(Math.random() * 1000).toString();
    boards.push({ name, id, orgId });
    return id;
}

export function getOrgs() {
    return orgs;
}

export function getBoards(orgId: string) {
    return boards.filter((b) => b.orgId === orgId);
}
