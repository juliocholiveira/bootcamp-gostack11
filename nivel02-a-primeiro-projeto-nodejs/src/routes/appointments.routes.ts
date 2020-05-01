import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const router = Router();

const appointmentRepository = new AppointmentRepository();

router.get('/', (req, res) => res.json(appointmentRepository.all()));

router.post('/', (req, res) => {
  try {
    const { provider, date } = req.body;

    const parsedDate = parseISO(date);

    const createAppointmentService = new CreateAppointmentService(appointmentRepository);

    const appointment = createAppointmentService.execute({ provider, date: parsedDate });

    return res.json(appointment);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default router;
