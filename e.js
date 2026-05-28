export class E {
    constructor(n) {
        if (!n) {
            this.m = [0];
            this.e = [0];
        } else if (n instanceof E) {
            this.m = n.m;
            this.e = n.e;
        } else {
            //a
        };
    };

    format(n) {
        if (!n) {
            console.error(`format()に値が渡されませんでした`);
            return new E();
        } else if (n instanceof E) {
            for (let i = 0; i < n.m.length; i++) {
                
            };
        };
    };
};

const a = new E();
a.format();