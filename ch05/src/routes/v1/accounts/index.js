
import express from 'express'
const Router = express.Router;

import accountController from '../../../controllers/account.js';
import accountValidation from '../../../validation/account.js';
import validate from '../../../middleware/validate.js';

const router = Router();
router.get('/', accountController.getAccounts);
router.get('/:id', validate(accountValidation.getAccountById), accountController.getAccountById);
router.post('/', validate(accountValidation.createAccount), accountController.createAccount);
router.delete('/:id', validate(accountValidation.deleteAccountById), accountController.deleteAccountById);
router.put('/:id', validate(accountValidation.updateAccountById), accountController.updateAccountById);

export default router;