const USER_COUNT = 1000;
export const generateUsers = (name: string) => Array.from({ length: name.length > 0 ? USER_COUNT : 0 }, (_, i) => i + 1)
    .map((i) => ({
        id: i.toString(),
        name: `${name} from dimension ${i}`,
    }));