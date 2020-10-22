import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
    firstName: string,
    lastName: string,
    cpf: string,
): IndividualCustomer => {
    return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
    name: string,
    cnpj: string,
): EnterpriseCustomer => {
    return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
    it('should have firstName, lastName and cpf', () => {
        const sut = createIndividualCustomer(
            'Ronaldo',
            'Aquino',
            '41716988802',
        );
        expect(sut).toHaveProperty('firstName', 'Ronaldo');
        expect(sut).toHaveProperty('lastName', 'Aquino');
        expect(sut).toHaveProperty('cpf', '41716988802');
    });

    it('should have methods to get name and idn', () => {
        const sut = createIndividualCustomer(
            'Ronaldo',
            'Aquino',
            '41716988802',
        );
        expect(sut.getName()).toBe('Ronaldo Aquino');
        expect(sut.getIDN()).toBe('41716988802');
    });
});

describe('EnterpriseCustomer', () => {
    it('should have nameand cnpj', () => {
        const sut = createEnterpriseCustomer('Aquinodev', '41716988802');
        expect(sut).toHaveProperty('name', 'Aquinodev');
        expect(sut).toHaveProperty('cnpj', '41716988802');
    });

    it('should have methods to get name and idn', () => {
        const sut = createEnterpriseCustomer('Aquinodev', '41716988802');
        expect(sut.getName()).toBe('Aquinodev');
        expect(sut.getIDN()).toBe('41716988802');
    });
});
