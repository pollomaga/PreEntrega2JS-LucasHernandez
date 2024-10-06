let especialidades = ['Medicina General', 'Cardiología', 'Oftalmología'];
let medicos = {
    'Medicina General': ['Dr. López', 'Dra. Martínez'],
    'Cardiología': ['Dr. Pérez', 'Dra. González'],
    'Oftalmología': ['Dr. Fernández', 'Dra. Sánchez']
};
let horarios = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
let reservas = [];

function mostrarEspecialidades() {
    let opciones = 'Seleccione una especialidad:\n';
    for (let i = 0; i < especialidades.length; i++) {
        opciones += `${i + 1}. ${especialidades[i]}\n`;
    }
    return prompt(opciones);
}

function mostrarMedicos(especialidad) {
    let medicosEspecialidad = medicos[especialidad];
    let opciones = `Seleccione un médico para ${especialidad}:\n`;
    for (let i = 0; i < medicosEspecialidad.length; i++) {
        opciones += `${i + 1}. ${medicosEspecialidad[i]}\n`;
    }
    return prompt(opciones);
}

function mostrarHorarios() {
    let opciones = 'Seleccione un horario:\n';
    for (let i = 0; i < horarios.length; i++) {
        opciones += `${i + 1}. ${horarios[i]}\n`;
    }
    return prompt(opciones);
}

function hacerReserva() {
    let paciente = prompt("Ingrese su nombre:");
    let especialidadSeleccionada = mostrarEspecialidades();

    if (especialidadSeleccionada >= 1 && especialidadSeleccionada <= especialidades.length) {
        let especialidad = especialidades[especialidadSeleccionada - 1];
        let medicoSeleccionado = mostrarMedicos(especialidad);

        if (medicoSeleccionado >= 1 && medicoSeleccionado <= medicos[especialidad].length) {
            let medico = medicos[especialidad][medicoSeleccionado - 1];
            let horarioSeleccionado = mostrarHorarios();

            if (horarioSeleccionado >= 1 && horarioSeleccionado <= horarios.length) {
                let horario = horarios[horarioSeleccionado - 1];

                let reserva = {
                    paciente: paciente,
                    especialidad: especialidad,
                    medico: medico,
                    horario: horario
                };
                reservas.push(reserva);
                alert(`Reserva confirmada para ${paciente} con el ${medico} a las ${horario} en ${especialidad}.`);
            } else {
                alert("Horario no válido.");
            }
        } else {
            alert("Médico no válido.");
        }
    } else {
        alert("Especialidad no válida.");
    }
}

function buscarReserva() {
    let nombrePaciente = prompt("Ingrese el nombre del paciente a buscar:");
    let reservasPaciente = reservas.filter(reserva => reserva.paciente === nombrePaciente);

    if (reservasPaciente.length > 0) {
        let mensaje = `Reservas para ${nombrePaciente}:\n`;
        reservasPaciente.forEach(reserva => {
            mensaje += `${reserva.especialidad}, Dr(a). ${reserva.medico}, ${reserva.horario}\n`;
        });
        alert(mensaje);
    } else {
        alert(`No se encontraron reservas para ${nombrePaciente}.`);
    }
}

function filtrarPorEspecialidad() {
    let especialidadSeleccionada = mostrarEspecialidades();

    if (especialidadSeleccionada >= 1 && especialidadSeleccionada <= especialidades.length) {
        let especialidad = especialidades[especialidadSeleccionada - 1];
        let reservasEspecialidad = reservas.filter(reserva => reserva.especialidad === especialidad);

        if (reservasEspecialidad.length > 0) {
            let mensaje = `Reservas para la especialidad ${especialidad}:\n`;
            reservasEspecialidad.forEach(reserva => {
                mensaje += `Paciente: ${reserva.paciente}, Dr(a). ${reserva.medico}, ${reserva.horario}\n`;
            });
            alert(mensaje);
        } else {
            alert(`No se encontraron reservas para la especialidad ${especialidad}.`);
        }
    } else {
        alert("Especialidad no válida.");
    }
}

// Menú de opciones
function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Hacer una reserva\n2. Buscar reservas por paciente\n3. Filtrar reservas por especialidad\n4. Salir");
        switch (opcion) {
            case '1':
                hacerReserva();
                break;
            case '2':
                buscarReserva();
                break;
            case '3':
                filtrarPorEspecialidad();
                break;
            case '4':
                alert("Gracias por usar el sistema de reservas.");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== '4');
}

menu();
