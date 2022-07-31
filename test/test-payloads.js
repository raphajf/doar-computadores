const payloadWithoutRequiredFields = {
    name: 'Rafael',
	email: 'rafael@email.com',
    phone: '32999999999',
	zip: '36085-580',
	number: 15,
	neighborhood: 'joquei',
	deviceCount: 3,
    devices: [
        {type: 'notebook', condition: 'working'},
        {type: 'scanner', condition: 'notWorking'},
		{type: 'screen', condition: 'broken'}
    ]
}

const payloadInvalidEmail = {
    name: 'Rafael',
	email: 'rafael@.com',
    phone: '32999999999',
	zip: '36085-580',
	city: 'juiz de fora',
	state: 'minas gerais',
	streetAddress: 'Rua A',
	number: 15,
	complement: 'apt103',
	neighborhood: 'joquei',
	deviceCount: 3,
    devices: [
        {type: 'printer', condition: 'working'},
        {type: 'desktop', condition: 'notWorking'},
		{type: 'netbook', condition: 'broken'}
    ]
}

const payloadWithoutDevices = {
    name: 'Rafael',
	email: 'rafael@email.com',
    phone: '32999999999',
	zip: '36085-580',
	city: 'juiz de fora',
	state: 'minas gerais',
	streetAddress: 'Rua A',
	number: 15,
	neighborhood: 'joquei',
	deviceCount: 3
}

const payloadDeviceCountNoMatch = {
    name: 'Rafael',
	email: 'rafael@email.com',
    phone: '32999999999',
	zip: '36085-580',
	city: 'juiz de fora',
	state: 'minas gerais',
	streetAddress: 'Rua A',
	number: 15,
	neighborhood: 'joquei',
	deviceCount: 4,
    devices: [
        {type: 'netbook', condition: 'working'},
        {type: 'notebook', condition: 'notWorking'},
		{type: 'screen', condition: 'broken'}
    ]
}

const invalidTypePayload = {
    name: 'Rafael',
	email: 'rafael@email.com',
    phone: '32999999999',
	zip: '36085-580',
	city: 'juiz de fora',
	state: 'minas gerais',
	streetAddress: 'Rua A',
	number: 15,
    complement: 'ap 103',
	neighborhood: 'joquei',
	deviceCount: 3,
    devices: [
        {type: 'rádio', condition: 'working'},
        {type: 'screen', condition: 'notWorking'},
		{type: 'desktop', condition: 'broken'}
    ]
}

const correctPayload = {
    name: 'Rafael',
	email: 'rafael@email.com',
    phone: '32999999999',
	zip: '36085-580',
	city: 'juiz de fora',
	state: 'minas gerais',
	streetAddress: 'Rua A',
	number: 15,
    complement: 'ap 103',
	neighborhood: 'joquei',
	deviceCount: 3,
    devices: [
        {type: 'scanner', condition: 'working'},
        {type: 'screen', condition: 'notWorking'},
		{type: 'desktop', condition: 'broken'}
    ]
}

module.exports = {
    payloadWithoutRequiredFields,
    payloadInvalidEmail,
    payloadWithoutDevices,
    payloadDeviceCountNoMatch,
	invalidTypePayload,
    correctPayload
}
