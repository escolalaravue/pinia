<template>
  <pre>
    {{serviceOrderStore}}
  </pre>
  <v-app>
    <v-layout>
      <v-app-bar class="text-center">
        <v-app-bar-title class="text-h5 font-weight-bold">Nova ordem de serviço</v-app-bar-title>
      </v-app-bar>

      <v-main class="mt-6">
        <v-container>
          <v-row>
            <v-col>
              <h3>Organizações Tabajara</h3>
              Avenida Dom Eugênio Sales, 96 - Boca do Rio <br>
              Salvador - Bahia 41715-030 <br>
              Tel: 71 9999-9999 <br>
              E-mail: contato@tabajara.com.br
            </v-col>

            <v-col>
              <OSDetails />
            </v-col>
          </v-row>

          <div class="mt-8">
            <OSClient />
          </div>

          <div class="mt-8">
            <ODServices />
          </div>

          <div class="mt-6">
            <v-row>
              <v-col>
                <v-textarea
                    label="Descrição da ordem de serviço"
                    hide-details
                    variant="outlined"
                />
              </v-col>

              <v-col>
                <v-card>
                  <v-table>
                    <tbody>
                    <tr>
                      <td><b>Subtotal</b></td>
                      <td class="text-right">R$ 100</td>
                    </tr>
                    <tr>
                      <td><b>Desconto</b></td>
                      <td>
                        <div class="text-right d-flex">
                          <v-text-field
                              variant="outlined"
                              density="compact"
                              hide-details
                              class="mr-2"
                          />

                          <v-select
                              variant="outlined"
                              density="compact"
                              :items="['%', 'R$']"
                              hide-details
                              style="max-width: 90px"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><b>Total</b></td>
                      <td class="text-right">R$ 50</td>
                    </tr>
                    </tbody>
                  </v-table>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="mt-8 text-right">
            <v-btn variant="text">Cancelar</v-btn>
            <v-btn color="primary">Enviar</v-btn>
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import {useServiceOrderStore} from './store/serviceOrder.js';
import {ref} from 'vue';
import OSDetails from './components/OSDetails.vue';
import OSClient from './components/OSClient.vue';
import ODServices from './components/ODServices.vue';

const serviceOrderStore = useServiceOrderStore()
</script>
