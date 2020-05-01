import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  public execute({ provider, date }: Request) : Appointment {
    const dateStartHour = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentRepository.findByDate(dateStartHour);

    if (findAppointmentInSameDate) {
      throw Error('This appointment is ready booked.');
    }

    const appointment = this.appointmentRepository.create({
      provider,
      date: dateStartHour,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
