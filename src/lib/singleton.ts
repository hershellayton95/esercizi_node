class Singleton {
    private static instance: Singleton;
    private count: number;

    private constructor() {
        this.count = 0;
    }

    public static getIstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    increment() {
        return this.count++;
    }

    get getCounter() {
        return this.count;
    }
}

export default Singleton;
