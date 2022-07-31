function receiveForm (form) {
    if (parseInt(form.deviceCount) !== form.devices.length){
        throw new Error({error:true, errorMessage: `A quantidade de equipamentos (${form.deviceCount}) não está de acordo com as informações de equipamentos enviados (${form.devices.length})`});
    } else {
        return { success:true };
    }
}

module.exports = receiveForm;