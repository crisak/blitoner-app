/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $condition: ModelAccountConditionInput
    $input: CreateAccountInput!
  ) {
    createAccount(condition: $condition, input: $input) {
      activeAccount
      actualOrders
      configuration {
        key
      }
      createdAt
      id
      isVtexAccount
      maxiumMonthlyOrders
      name
      salesChannels {
        items {
          account {
            activeAccount
            actualOrders
            configuration {
              key
            }
            createdAt
            id
            isVtexAccount
            maxiumMonthlyOrders
            name
            salesChannels {
              items {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          accountSalesChannelsId
          createdAt
          id
          name
          salesSource {
            items {
              configuration {
                key
              }
              createdAt
              downloadOrders
              id
              salesChannel {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              salesChannelSalesSourceId
              salesSourceStoreConfigId
              storeConfig {
                batchInterval
                capacityManagement
                createdAt
                general {
                  address
                  addressComplement
                  changePricesReasons {
                    id
                    name
                  }
                  city
                  contactInformation {
                    email
                    name
                    phone
                  }
                  country
                  deliveryWindow {
                    finalHour
                    initialHour
                    name
                    weekDay
                  }
                  location {
                    latitude
                    longitude
                  }
                  measurementUnit
                  name
                  replacementReasons {
                    id
                    name
                  }
                  state
                }
                globalOrders
                id
                isActive
                localOrders
                packages {
                  description
                  id
                  name
                  price
                  quantity
                  type
                }
                packingPath
                preparationTime
                salesSources {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                timezone {
                  offset
                  value
                }
                updatedAt
              }
              storeConfigSalesSourcesId
              type
              updatedAt
              warehouseId
              warehouseName
            }
            nextToken
          }
          type
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const createBatch = /* GraphQL */ `
  mutation CreateBatch(
    $condition: ModelBatchConditionInput
    $input: CreateBatchInput!
  ) {
    createBatch(condition: $condition, input: $input) {
      assignmentMethod
      assignmentTime {
        assignedAt
      }
      createdAt
      deliveryWindow {
        finalHour
        initialHour
      }
      id
      orders {
        items {
          batchOrdersId
          billing {
            address1
            address2
            billingName
            city
            country
            discount
            docType
            freighAmount
            id
            state
            tax
            total
          }
          createdAt
          createdDate
          customer {
            document
            documentType
            email
            firstName
            lastName
            level
            phone
            profileId
          }
          deliveryChannel
          deliveryDate
          finishedDate
          hostname
          invoices {
            invoiceCreationDate
            invoiceKey
            invoiceNumber
            invoiceReceiptDate
            invoiceSubtotal
            invoiceTaxes
            invoiceTotal
            invoiceUrl
            packages
          }
          items {
            EAN
            additionalEAN
            additionalReferenceCode
            additionalSku
            basePrice
            brand {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            categories {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            description
            dimensions {
              cubicWeight
              height
              lenght
              weight
              width
            }
            id
            images
            inventoryData {
              quantity
              warehouseId
              warehouseName
            }
            isCombo
            isTaxable
            itemName
            label
            metaData
            notes
            observations
            pickingOptions {
              alternateOptions
              onNotFound
            }
            price
            qrCodeContent
            quantity
            referenceCode
            sku
            storeConfig
            tax
            temperature
            unitMultiplier
            unitOfMeasure
            weightableProduct
          }
          marketingData {
            id
            marketingTags
            utmCampaign
            utmMedium
            utmPartner
            utmSource
            utmiPart
            utmipage
          }
          metaData
          notes
          observations
          orderAssignment {
            finishedDate
            initDate
            status
            worksheetId
          }
          orderId
          payment {
            authorization
            baseTotal
            cardNumber
            currency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            date
            discount
            firstDigits
            grandTotal
            installments
            lastDigits
            method
            paymentHolder
            paymentId
            paymentName
            plcConversionRate
            priceListCurrency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            tax
            transactionId
            transactionRef
          }
          prepareDate
          salesSourceId
          shipping {
            orderUniqueAddress
            shippingInfo {
              address1
              address2
              carrier {
                id
                name
                phone
                type
              }
              city
              contactName
              contactPhone
              country
              indications
              itemId
              location {
                alt
                lat
                lng
              }
              schedule {
                fromDate
                toDate
              }
              shippingMethod {
                id
                name
                saleChannelShippingInfo
                subTotal
                taxes
                total
              }
              shippingType
              state
            }
            tracking {
              carrier
              createDate
              delivered
              deliveredDate
              id
              packages
              trackingKey
              trackingUrl
            }
          }
          shippingEstimatedDateMin
          status
          storeConfigId
          transactionDate
          updatedAt
          vendor {
            name
            vendorId
          }
        }
        nextToken
      }
      seller
      status
      updatedAt
      worksheets {
        items {
          batchWorksheetsId
          categoriesIds
          createdAt
          finishedDate
          id
          items {
            ID
            categoriesId
            finalPrice
            itemAssignment {
              AssignedAt
              FinishedAt
              StartPickingAt
            }
            name
            orderSource {
              orderId
              quantity
            }
            originalPrice
            status
            temperature
            totalQuantity
          }
          ordersIds
          pickerAssignment {
            assignmentDate
            method
            pickerId
          }
          status
          totalItems
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createCarrier = /* GraphQL */ `
  mutation CreateCarrier(
    $condition: ModelCarrierConditionInput
    $input: CreateCarrierInput!
  ) {
    createCarrier(condition: $condition, input: $input) {
      active
      agencyId
      allocationTime
      authorized
      cancelable
      countries
      createdAt
      formConfiguration {
        description
        key
        label
        max
        min
        options {
          id
          label
          value
        }
        priority
        required
        type
        value
      }
      hasDevEnvironment
      id
      integration {
        dev {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
        prod {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
      }
      logo
      name
      onHoldServices
      pricing {
        type
        value
      }
      shippingPaymentMethods
      type
      updatedAt
      withQueues
    }
  }
`;
export const createCarriersStoreConfig = /* GraphQL */ `
  mutation CreateCarriersStoreConfig(
    $condition: ModelCarriersStoreConfigConditionInput
    $input: CreateCarriersStoreConfigInput!
  ) {
    createCarriersStoreConfig(condition: $condition, input: $input) {
      account
      active
      carrierId
      config {
        key
        label
        value
      }
      createdAt
      deliveryMethod {
        id
        name
        serviceType
      }
      env
      id
      name
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $condition: ModelOrderConditionInput
    $input: CreateOrderInput!
  ) {
    createOrder(condition: $condition, input: $input) {
      batchOrdersId
      billing {
        address1
        address2
        billingName
        city
        country
        discount
        docType
        freighAmount
        id
        state
        tax
        total
      }
      createdAt
      createdDate
      customer {
        document
        documentType
        email
        firstName
        lastName
        level
        phone
        profileId
      }
      deliveryChannel
      deliveryDate
      finishedDate
      hostname
      invoices {
        invoiceCreationDate
        invoiceKey
        invoiceNumber
        invoiceReceiptDate
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        packages
      }
      items {
        EAN
        additionalEAN
        additionalReferenceCode
        additionalSku
        basePrice
        brand {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        categories {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        description
        dimensions {
          cubicWeight
          height
          lenght
          weight
          width
        }
        id
        images
        inventoryData {
          quantity
          warehouseId
          warehouseName
        }
        isCombo
        isTaxable
        itemName
        label
        metaData
        notes
        observations
        pickingOptions {
          alternateOptions
          onNotFound
        }
        price
        qrCodeContent
        quantity
        referenceCode
        sku
        storeConfig
        tax
        temperature
        unitMultiplier
        unitOfMeasure
        weightableProduct
      }
      marketingData {
        id
        marketingTags
        utmCampaign
        utmMedium
        utmPartner
        utmSource
        utmiPart
        utmipage
      }
      metaData
      notes
      observations
      orderAssignment {
        finishedDate
        initDate
        status
        worksheetId
      }
      orderId
      payment {
        authorization
        baseTotal
        cardNumber
        currency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        date
        discount
        firstDigits
        grandTotal
        installments
        lastDigits
        method
        paymentHolder
        paymentId
        paymentName
        plcConversionRate
        priceListCurrency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        tax
        transactionId
        transactionRef
      }
      prepareDate
      salesSourceId
      shipping {
        orderUniqueAddress
        shippingInfo {
          address1
          address2
          carrier {
            id
            name
            phone
            type
          }
          city
          contactName
          contactPhone
          country
          indications
          itemId
          location {
            alt
            lat
            lng
          }
          schedule {
            fromDate
            toDate
          }
          shippingMethod {
            id
            name
            saleChannelShippingInfo
            subTotal
            taxes
            total
          }
          shippingType
          state
        }
        tracking {
          carrier
          createDate
          delivered
          deliveredDate
          id
          packages
          trackingKey
          trackingUrl
        }
      }
      shippingEstimatedDateMin
      status
      storeConfigId
      transactionDate
      updatedAt
      vendor {
        name
        vendorId
      }
    }
  }
`;
export const createSalesChannel = /* GraphQL */ `
  mutation CreateSalesChannel(
    $condition: ModelSalesChannelConditionInput
    $input: CreateSalesChannelInput!
  ) {
    createSalesChannel(condition: $condition, input: $input) {
      account {
        activeAccount
        actualOrders
        configuration {
          key
        }
        createdAt
        id
        isVtexAccount
        maxiumMonthlyOrders
        name
        salesChannels {
          items {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      accountSalesChannelsId
      createdAt
      id
      name
      salesSource {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const createSalesSource = /* GraphQL */ `
  mutation CreateSalesSource(
    $condition: ModelSalesSourceConditionInput
    $input: CreateSalesSourceInput!
  ) {
    createSalesSource(condition: $condition, input: $input) {
      configuration {
        key
      }
      createdAt
      downloadOrders
      id
      salesChannel {
        account {
          activeAccount
          actualOrders
          configuration {
            key
          }
          createdAt
          id
          isVtexAccount
          maxiumMonthlyOrders
          name
          salesChannels {
            items {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        accountSalesChannelsId
        createdAt
        id
        name
        salesSource {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        type
        updatedAt
      }
      salesChannelSalesSourceId
      salesSourceStoreConfigId
      storeConfig {
        batchInterval
        capacityManagement
        createdAt
        general {
          address
          addressComplement
          changePricesReasons {
            id
            name
          }
          city
          contactInformation {
            email
            name
            phone
          }
          country
          deliveryWindow {
            finalHour
            initialHour
            name
            weekDay
          }
          location {
            latitude
            longitude
          }
          measurementUnit
          name
          replacementReasons {
            id
            name
          }
          state
        }
        globalOrders
        id
        isActive
        localOrders
        packages {
          description
          id
          name
          price
          quantity
          type
        }
        packingPath
        preparationTime
        salesSources {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        timezone {
          offset
          value
        }
        updatedAt
      }
      storeConfigSalesSourcesId
      type
      updatedAt
      warehouseId
      warehouseName
    }
  }
`;
export const createService = /* GraphQL */ `
  mutation CreateService(
    $condition: ModelServiceConditionInput
    $input: CreateServiceInput!
  ) {
    createService(condition: $condition, input: $input) {
      agent {
        email
        id
        identification
        name
        phone
        vehicle
      }
      carrierId
      carrierLogo
      carrierName
      carrierServiceType
      comments
      createdAt
      evidences {
        author
        content
        date
        type
      }
      id
      labels {
        id
        name
        type
        url
      }
      metaData
      notes {
        author
        content
        date
        type
      }
      orderId
      packages {
        description
        dimensions {
          height
          length
          width
        }
        envelope
        id
        items {
          ean
          id
          image
          name
          price
          quantity
          refId
          type
          weight
        }
        orderId
        totalValue
        weight
      }
      paymentMethod
      rating
      receiver {
        address
        addressComplement
        city
        contactName
        country
        deliveryDate
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        identification
        location {
          latitude
          longitude
        }
        name
        phone
        state
        zipCode
      }
      seller
      sender {
        address
        addressComplement
        city
        country
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        location {
          latitude
          longitude
        }
        name
        phone
        pickupDate
        state
        zipCode
      }
      serviceId
      shippingEstimatedDate
      shippingPrice
      status
      timeline {
        items {
          author
          createdAt
          date
          description
          id
          metaData
          serviceID
          type
          updatedAt
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      totalDistanceTraveled
      trackingUrl
      type
      updatedAt
    }
  }
`;
export const createStoreConfig = /* GraphQL */ `
  mutation CreateStoreConfig(
    $condition: ModelStoreConfigConditionInput
    $input: CreateStoreConfigInput!
  ) {
    createStoreConfig(condition: $condition, input: $input) {
      batchInterval
      capacityManagement
      createdAt
      general {
        address
        addressComplement
        changePricesReasons {
          id
          name
        }
        city
        contactInformation {
          email
          name
          phone
        }
        country
        deliveryWindow {
          finalHour
          initialHour
          name
          weekDay
        }
        location {
          latitude
          longitude
        }
        measurementUnit
        name
        replacementReasons {
          id
          name
        }
        state
      }
      globalOrders
      id
      isActive
      localOrders
      packages {
        description
        id
        name
        price
        quantity
        type
      }
      packingPath
      preparationTime
      salesSources {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      updatedAt
    }
  }
`;
export const createTrackingTimeline = /* GraphQL */ `
  mutation CreateTrackingTimeline(
    $condition: ModelTrackingTimelineConditionInput
    $input: CreateTrackingTimelineInput!
  ) {
    createTrackingTimeline(condition: $condition, input: $input) {
      author
      createdAt
      date
      description
      id
      metaData
      serviceID
      type
      updatedAt
    }
  }
`;
export const createWorksheet = /* GraphQL */ `
  mutation CreateWorksheet(
    $condition: ModelWorksheetConditionInput
    $input: CreateWorksheetInput!
  ) {
    createWorksheet(condition: $condition, input: $input) {
      batchWorksheetsId
      categoriesIds
      createdAt
      finishedDate
      id
      items {
        ID
        categoriesId
        finalPrice
        itemAssignment {
          AssignedAt
          FinishedAt
          StartPickingAt
        }
        name
        orderSource {
          orderId
          quantity
        }
        originalPrice
        status
        temperature
        totalQuantity
      }
      ordersIds
      pickerAssignment {
        assignmentDate
        method
        pickerId
      }
      status
      totalItems
      updatedAt
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $condition: ModelAccountConditionInput
    $input: DeleteAccountInput!
  ) {
    deleteAccount(condition: $condition, input: $input) {
      activeAccount
      actualOrders
      configuration {
        key
      }
      createdAt
      id
      isVtexAccount
      maxiumMonthlyOrders
      name
      salesChannels {
        items {
          account {
            activeAccount
            actualOrders
            configuration {
              key
            }
            createdAt
            id
            isVtexAccount
            maxiumMonthlyOrders
            name
            salesChannels {
              items {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          accountSalesChannelsId
          createdAt
          id
          name
          salesSource {
            items {
              configuration {
                key
              }
              createdAt
              downloadOrders
              id
              salesChannel {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              salesChannelSalesSourceId
              salesSourceStoreConfigId
              storeConfig {
                batchInterval
                capacityManagement
                createdAt
                general {
                  address
                  addressComplement
                  changePricesReasons {
                    id
                    name
                  }
                  city
                  contactInformation {
                    email
                    name
                    phone
                  }
                  country
                  deliveryWindow {
                    finalHour
                    initialHour
                    name
                    weekDay
                  }
                  location {
                    latitude
                    longitude
                  }
                  measurementUnit
                  name
                  replacementReasons {
                    id
                    name
                  }
                  state
                }
                globalOrders
                id
                isActive
                localOrders
                packages {
                  description
                  id
                  name
                  price
                  quantity
                  type
                }
                packingPath
                preparationTime
                salesSources {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                timezone {
                  offset
                  value
                }
                updatedAt
              }
              storeConfigSalesSourcesId
              type
              updatedAt
              warehouseId
              warehouseName
            }
            nextToken
          }
          type
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteBatch = /* GraphQL */ `
  mutation DeleteBatch(
    $condition: ModelBatchConditionInput
    $input: DeleteBatchInput!
  ) {
    deleteBatch(condition: $condition, input: $input) {
      assignmentMethod
      assignmentTime {
        assignedAt
      }
      createdAt
      deliveryWindow {
        finalHour
        initialHour
      }
      id
      orders {
        items {
          batchOrdersId
          billing {
            address1
            address2
            billingName
            city
            country
            discount
            docType
            freighAmount
            id
            state
            tax
            total
          }
          createdAt
          createdDate
          customer {
            document
            documentType
            email
            firstName
            lastName
            level
            phone
            profileId
          }
          deliveryChannel
          deliveryDate
          finishedDate
          hostname
          invoices {
            invoiceCreationDate
            invoiceKey
            invoiceNumber
            invoiceReceiptDate
            invoiceSubtotal
            invoiceTaxes
            invoiceTotal
            invoiceUrl
            packages
          }
          items {
            EAN
            additionalEAN
            additionalReferenceCode
            additionalSku
            basePrice
            brand {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            categories {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            description
            dimensions {
              cubicWeight
              height
              lenght
              weight
              width
            }
            id
            images
            inventoryData {
              quantity
              warehouseId
              warehouseName
            }
            isCombo
            isTaxable
            itemName
            label
            metaData
            notes
            observations
            pickingOptions {
              alternateOptions
              onNotFound
            }
            price
            qrCodeContent
            quantity
            referenceCode
            sku
            storeConfig
            tax
            temperature
            unitMultiplier
            unitOfMeasure
            weightableProduct
          }
          marketingData {
            id
            marketingTags
            utmCampaign
            utmMedium
            utmPartner
            utmSource
            utmiPart
            utmipage
          }
          metaData
          notes
          observations
          orderAssignment {
            finishedDate
            initDate
            status
            worksheetId
          }
          orderId
          payment {
            authorization
            baseTotal
            cardNumber
            currency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            date
            discount
            firstDigits
            grandTotal
            installments
            lastDigits
            method
            paymentHolder
            paymentId
            paymentName
            plcConversionRate
            priceListCurrency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            tax
            transactionId
            transactionRef
          }
          prepareDate
          salesSourceId
          shipping {
            orderUniqueAddress
            shippingInfo {
              address1
              address2
              carrier {
                id
                name
                phone
                type
              }
              city
              contactName
              contactPhone
              country
              indications
              itemId
              location {
                alt
                lat
                lng
              }
              schedule {
                fromDate
                toDate
              }
              shippingMethod {
                id
                name
                saleChannelShippingInfo
                subTotal
                taxes
                total
              }
              shippingType
              state
            }
            tracking {
              carrier
              createDate
              delivered
              deliveredDate
              id
              packages
              trackingKey
              trackingUrl
            }
          }
          shippingEstimatedDateMin
          status
          storeConfigId
          transactionDate
          updatedAt
          vendor {
            name
            vendorId
          }
        }
        nextToken
      }
      seller
      status
      updatedAt
      worksheets {
        items {
          batchWorksheetsId
          categoriesIds
          createdAt
          finishedDate
          id
          items {
            ID
            categoriesId
            finalPrice
            itemAssignment {
              AssignedAt
              FinishedAt
              StartPickingAt
            }
            name
            orderSource {
              orderId
              quantity
            }
            originalPrice
            status
            temperature
            totalQuantity
          }
          ordersIds
          pickerAssignment {
            assignmentDate
            method
            pickerId
          }
          status
          totalItems
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteCarrier = /* GraphQL */ `
  mutation DeleteCarrier(
    $condition: ModelCarrierConditionInput
    $input: DeleteCarrierInput!
  ) {
    deleteCarrier(condition: $condition, input: $input) {
      active
      agencyId
      allocationTime
      authorized
      cancelable
      countries
      createdAt
      formConfiguration {
        description
        key
        label
        max
        min
        options {
          id
          label
          value
        }
        priority
        required
        type
        value
      }
      hasDevEnvironment
      id
      integration {
        dev {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
        prod {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
      }
      logo
      name
      onHoldServices
      pricing {
        type
        value
      }
      shippingPaymentMethods
      type
      updatedAt
      withQueues
    }
  }
`;
export const deleteCarriersStoreConfig = /* GraphQL */ `
  mutation DeleteCarriersStoreConfig(
    $condition: ModelCarriersStoreConfigConditionInput
    $input: DeleteCarriersStoreConfigInput!
  ) {
    deleteCarriersStoreConfig(condition: $condition, input: $input) {
      account
      active
      carrierId
      config {
        key
        label
        value
      }
      createdAt
      deliveryMethod {
        id
        name
        serviceType
      }
      env
      id
      name
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $condition: ModelOrderConditionInput
    $input: DeleteOrderInput!
  ) {
    deleteOrder(condition: $condition, input: $input) {
      batchOrdersId
      billing {
        address1
        address2
        billingName
        city
        country
        discount
        docType
        freighAmount
        id
        state
        tax
        total
      }
      createdAt
      createdDate
      customer {
        document
        documentType
        email
        firstName
        lastName
        level
        phone
        profileId
      }
      deliveryChannel
      deliveryDate
      finishedDate
      hostname
      invoices {
        invoiceCreationDate
        invoiceKey
        invoiceNumber
        invoiceReceiptDate
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        packages
      }
      items {
        EAN
        additionalEAN
        additionalReferenceCode
        additionalSku
        basePrice
        brand {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        categories {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        description
        dimensions {
          cubicWeight
          height
          lenght
          weight
          width
        }
        id
        images
        inventoryData {
          quantity
          warehouseId
          warehouseName
        }
        isCombo
        isTaxable
        itemName
        label
        metaData
        notes
        observations
        pickingOptions {
          alternateOptions
          onNotFound
        }
        price
        qrCodeContent
        quantity
        referenceCode
        sku
        storeConfig
        tax
        temperature
        unitMultiplier
        unitOfMeasure
        weightableProduct
      }
      marketingData {
        id
        marketingTags
        utmCampaign
        utmMedium
        utmPartner
        utmSource
        utmiPart
        utmipage
      }
      metaData
      notes
      observations
      orderAssignment {
        finishedDate
        initDate
        status
        worksheetId
      }
      orderId
      payment {
        authorization
        baseTotal
        cardNumber
        currency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        date
        discount
        firstDigits
        grandTotal
        installments
        lastDigits
        method
        paymentHolder
        paymentId
        paymentName
        plcConversionRate
        priceListCurrency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        tax
        transactionId
        transactionRef
      }
      prepareDate
      salesSourceId
      shipping {
        orderUniqueAddress
        shippingInfo {
          address1
          address2
          carrier {
            id
            name
            phone
            type
          }
          city
          contactName
          contactPhone
          country
          indications
          itemId
          location {
            alt
            lat
            lng
          }
          schedule {
            fromDate
            toDate
          }
          shippingMethod {
            id
            name
            saleChannelShippingInfo
            subTotal
            taxes
            total
          }
          shippingType
          state
        }
        tracking {
          carrier
          createDate
          delivered
          deliveredDate
          id
          packages
          trackingKey
          trackingUrl
        }
      }
      shippingEstimatedDateMin
      status
      storeConfigId
      transactionDate
      updatedAt
      vendor {
        name
        vendorId
      }
    }
  }
`;
export const deleteSalesChannel = /* GraphQL */ `
  mutation DeleteSalesChannel(
    $condition: ModelSalesChannelConditionInput
    $input: DeleteSalesChannelInput!
  ) {
    deleteSalesChannel(condition: $condition, input: $input) {
      account {
        activeAccount
        actualOrders
        configuration {
          key
        }
        createdAt
        id
        isVtexAccount
        maxiumMonthlyOrders
        name
        salesChannels {
          items {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      accountSalesChannelsId
      createdAt
      id
      name
      salesSource {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const deleteSalesSource = /* GraphQL */ `
  mutation DeleteSalesSource(
    $condition: ModelSalesSourceConditionInput
    $input: DeleteSalesSourceInput!
  ) {
    deleteSalesSource(condition: $condition, input: $input) {
      configuration {
        key
      }
      createdAt
      downloadOrders
      id
      salesChannel {
        account {
          activeAccount
          actualOrders
          configuration {
            key
          }
          createdAt
          id
          isVtexAccount
          maxiumMonthlyOrders
          name
          salesChannels {
            items {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        accountSalesChannelsId
        createdAt
        id
        name
        salesSource {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        type
        updatedAt
      }
      salesChannelSalesSourceId
      salesSourceStoreConfigId
      storeConfig {
        batchInterval
        capacityManagement
        createdAt
        general {
          address
          addressComplement
          changePricesReasons {
            id
            name
          }
          city
          contactInformation {
            email
            name
            phone
          }
          country
          deliveryWindow {
            finalHour
            initialHour
            name
            weekDay
          }
          location {
            latitude
            longitude
          }
          measurementUnit
          name
          replacementReasons {
            id
            name
          }
          state
        }
        globalOrders
        id
        isActive
        localOrders
        packages {
          description
          id
          name
          price
          quantity
          type
        }
        packingPath
        preparationTime
        salesSources {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        timezone {
          offset
          value
        }
        updatedAt
      }
      storeConfigSalesSourcesId
      type
      updatedAt
      warehouseId
      warehouseName
    }
  }
`;
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $condition: ModelServiceConditionInput
    $input: DeleteServiceInput!
  ) {
    deleteService(condition: $condition, input: $input) {
      agent {
        email
        id
        identification
        name
        phone
        vehicle
      }
      carrierId
      carrierLogo
      carrierName
      carrierServiceType
      comments
      createdAt
      evidences {
        author
        content
        date
        type
      }
      id
      labels {
        id
        name
        type
        url
      }
      metaData
      notes {
        author
        content
        date
        type
      }
      orderId
      packages {
        description
        dimensions {
          height
          length
          width
        }
        envelope
        id
        items {
          ean
          id
          image
          name
          price
          quantity
          refId
          type
          weight
        }
        orderId
        totalValue
        weight
      }
      paymentMethod
      rating
      receiver {
        address
        addressComplement
        city
        contactName
        country
        deliveryDate
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        identification
        location {
          latitude
          longitude
        }
        name
        phone
        state
        zipCode
      }
      seller
      sender {
        address
        addressComplement
        city
        country
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        location {
          latitude
          longitude
        }
        name
        phone
        pickupDate
        state
        zipCode
      }
      serviceId
      shippingEstimatedDate
      shippingPrice
      status
      timeline {
        items {
          author
          createdAt
          date
          description
          id
          metaData
          serviceID
          type
          updatedAt
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      totalDistanceTraveled
      trackingUrl
      type
      updatedAt
    }
  }
`;
export const deleteStoreConfig = /* GraphQL */ `
  mutation DeleteStoreConfig(
    $condition: ModelStoreConfigConditionInput
    $input: DeleteStoreConfigInput!
  ) {
    deleteStoreConfig(condition: $condition, input: $input) {
      batchInterval
      capacityManagement
      createdAt
      general {
        address
        addressComplement
        changePricesReasons {
          id
          name
        }
        city
        contactInformation {
          email
          name
          phone
        }
        country
        deliveryWindow {
          finalHour
          initialHour
          name
          weekDay
        }
        location {
          latitude
          longitude
        }
        measurementUnit
        name
        replacementReasons {
          id
          name
        }
        state
      }
      globalOrders
      id
      isActive
      localOrders
      packages {
        description
        id
        name
        price
        quantity
        type
      }
      packingPath
      preparationTime
      salesSources {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      updatedAt
    }
  }
`;
export const deleteTrackingTimeline = /* GraphQL */ `
  mutation DeleteTrackingTimeline(
    $condition: ModelTrackingTimelineConditionInput
    $input: DeleteTrackingTimelineInput!
  ) {
    deleteTrackingTimeline(condition: $condition, input: $input) {
      author
      createdAt
      date
      description
      id
      metaData
      serviceID
      type
      updatedAt
    }
  }
`;
export const deleteWorksheet = /* GraphQL */ `
  mutation DeleteWorksheet(
    $condition: ModelWorksheetConditionInput
    $input: DeleteWorksheetInput!
  ) {
    deleteWorksheet(condition: $condition, input: $input) {
      batchWorksheetsId
      categoriesIds
      createdAt
      finishedDate
      id
      items {
        ID
        categoriesId
        finalPrice
        itemAssignment {
          AssignedAt
          FinishedAt
          StartPickingAt
        }
        name
        orderSource {
          orderId
          quantity
        }
        originalPrice
        status
        temperature
        totalQuantity
      }
      ordersIds
      pickerAssignment {
        assignmentDate
        method
        pickerId
      }
      status
      totalItems
      updatedAt
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $condition: ModelAccountConditionInput
    $input: UpdateAccountInput!
  ) {
    updateAccount(condition: $condition, input: $input) {
      activeAccount
      actualOrders
      configuration {
        key
      }
      createdAt
      id
      isVtexAccount
      maxiumMonthlyOrders
      name
      salesChannels {
        items {
          account {
            activeAccount
            actualOrders
            configuration {
              key
            }
            createdAt
            id
            isVtexAccount
            maxiumMonthlyOrders
            name
            salesChannels {
              items {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          accountSalesChannelsId
          createdAt
          id
          name
          salesSource {
            items {
              configuration {
                key
              }
              createdAt
              downloadOrders
              id
              salesChannel {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              salesChannelSalesSourceId
              salesSourceStoreConfigId
              storeConfig {
                batchInterval
                capacityManagement
                createdAt
                general {
                  address
                  addressComplement
                  changePricesReasons {
                    id
                    name
                  }
                  city
                  contactInformation {
                    email
                    name
                    phone
                  }
                  country
                  deliveryWindow {
                    finalHour
                    initialHour
                    name
                    weekDay
                  }
                  location {
                    latitude
                    longitude
                  }
                  measurementUnit
                  name
                  replacementReasons {
                    id
                    name
                  }
                  state
                }
                globalOrders
                id
                isActive
                localOrders
                packages {
                  description
                  id
                  name
                  price
                  quantity
                  type
                }
                packingPath
                preparationTime
                salesSources {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                timezone {
                  offset
                  value
                }
                updatedAt
              }
              storeConfigSalesSourcesId
              type
              updatedAt
              warehouseId
              warehouseName
            }
            nextToken
          }
          type
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateBatch = /* GraphQL */ `
  mutation UpdateBatch(
    $condition: ModelBatchConditionInput
    $input: UpdateBatchInput!
  ) {
    updateBatch(condition: $condition, input: $input) {
      assignmentMethod
      assignmentTime {
        assignedAt
      }
      createdAt
      deliveryWindow {
        finalHour
        initialHour
      }
      id
      orders {
        items {
          batchOrdersId
          billing {
            address1
            address2
            billingName
            city
            country
            discount
            docType
            freighAmount
            id
            state
            tax
            total
          }
          createdAt
          createdDate
          customer {
            document
            documentType
            email
            firstName
            lastName
            level
            phone
            profileId
          }
          deliveryChannel
          deliveryDate
          finishedDate
          hostname
          invoices {
            invoiceCreationDate
            invoiceKey
            invoiceNumber
            invoiceReceiptDate
            invoiceSubtotal
            invoiceTaxes
            invoiceTotal
            invoiceUrl
            packages
          }
          items {
            EAN
            additionalEAN
            additionalReferenceCode
            additionalSku
            basePrice
            brand {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            categories {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            description
            dimensions {
              cubicWeight
              height
              lenght
              weight
              width
            }
            id
            images
            inventoryData {
              quantity
              warehouseId
              warehouseName
            }
            isCombo
            isTaxable
            itemName
            label
            metaData
            notes
            observations
            pickingOptions {
              alternateOptions
              onNotFound
            }
            price
            qrCodeContent
            quantity
            referenceCode
            sku
            storeConfig
            tax
            temperature
            unitMultiplier
            unitOfMeasure
            weightableProduct
          }
          marketingData {
            id
            marketingTags
            utmCampaign
            utmMedium
            utmPartner
            utmSource
            utmiPart
            utmipage
          }
          metaData
          notes
          observations
          orderAssignment {
            finishedDate
            initDate
            status
            worksheetId
          }
          orderId
          payment {
            authorization
            baseTotal
            cardNumber
            currency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            date
            discount
            firstDigits
            grandTotal
            installments
            lastDigits
            method
            paymentHolder
            paymentId
            paymentName
            plcConversionRate
            priceListCurrency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            tax
            transactionId
            transactionRef
          }
          prepareDate
          salesSourceId
          shipping {
            orderUniqueAddress
            shippingInfo {
              address1
              address2
              carrier {
                id
                name
                phone
                type
              }
              city
              contactName
              contactPhone
              country
              indications
              itemId
              location {
                alt
                lat
                lng
              }
              schedule {
                fromDate
                toDate
              }
              shippingMethod {
                id
                name
                saleChannelShippingInfo
                subTotal
                taxes
                total
              }
              shippingType
              state
            }
            tracking {
              carrier
              createDate
              delivered
              deliveredDate
              id
              packages
              trackingKey
              trackingUrl
            }
          }
          shippingEstimatedDateMin
          status
          storeConfigId
          transactionDate
          updatedAt
          vendor {
            name
            vendorId
          }
        }
        nextToken
      }
      seller
      status
      updatedAt
      worksheets {
        items {
          batchWorksheetsId
          categoriesIds
          createdAt
          finishedDate
          id
          items {
            ID
            categoriesId
            finalPrice
            itemAssignment {
              AssignedAt
              FinishedAt
              StartPickingAt
            }
            name
            orderSource {
              orderId
              quantity
            }
            originalPrice
            status
            temperature
            totalQuantity
          }
          ordersIds
          pickerAssignment {
            assignmentDate
            method
            pickerId
          }
          status
          totalItems
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateCarrier = /* GraphQL */ `
  mutation UpdateCarrier(
    $condition: ModelCarrierConditionInput
    $input: UpdateCarrierInput!
  ) {
    updateCarrier(condition: $condition, input: $input) {
      active
      agencyId
      allocationTime
      authorized
      cancelable
      countries
      createdAt
      formConfiguration {
        description
        key
        label
        max
        min
        options {
          id
          label
          value
        }
        priority
        required
        type
        value
      }
      hasDevEnvironment
      id
      integration {
        dev {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
        prod {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
      }
      logo
      name
      onHoldServices
      pricing {
        type
        value
      }
      shippingPaymentMethods
      type
      updatedAt
      withQueues
    }
  }
`;
export const updateCarriersStoreConfig = /* GraphQL */ `
  mutation UpdateCarriersStoreConfig(
    $condition: ModelCarriersStoreConfigConditionInput
    $input: UpdateCarriersStoreConfigInput!
  ) {
    updateCarriersStoreConfig(condition: $condition, input: $input) {
      account
      active
      carrierId
      config {
        key
        label
        value
      }
      createdAt
      deliveryMethod {
        id
        name
        serviceType
      }
      env
      id
      name
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $condition: ModelOrderConditionInput
    $input: UpdateOrderInput!
  ) {
    updateOrder(condition: $condition, input: $input) {
      batchOrdersId
      billing {
        address1
        address2
        billingName
        city
        country
        discount
        docType
        freighAmount
        id
        state
        tax
        total
      }
      createdAt
      createdDate
      customer {
        document
        documentType
        email
        firstName
        lastName
        level
        phone
        profileId
      }
      deliveryChannel
      deliveryDate
      finishedDate
      hostname
      invoices {
        invoiceCreationDate
        invoiceKey
        invoiceNumber
        invoiceReceiptDate
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        packages
      }
      items {
        EAN
        additionalEAN
        additionalReferenceCode
        additionalSku
        basePrice
        brand {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        categories {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        description
        dimensions {
          cubicWeight
          height
          lenght
          weight
          width
        }
        id
        images
        inventoryData {
          quantity
          warehouseId
          warehouseName
        }
        isCombo
        isTaxable
        itemName
        label
        metaData
        notes
        observations
        pickingOptions {
          alternateOptions
          onNotFound
        }
        price
        qrCodeContent
        quantity
        referenceCode
        sku
        storeConfig
        tax
        temperature
        unitMultiplier
        unitOfMeasure
        weightableProduct
      }
      marketingData {
        id
        marketingTags
        utmCampaign
        utmMedium
        utmPartner
        utmSource
        utmiPart
        utmipage
      }
      metaData
      notes
      observations
      orderAssignment {
        finishedDate
        initDate
        status
        worksheetId
      }
      orderId
      payment {
        authorization
        baseTotal
        cardNumber
        currency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        date
        discount
        firstDigits
        grandTotal
        installments
        lastDigits
        method
        paymentHolder
        paymentId
        paymentName
        plcConversionRate
        priceListCurrency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        tax
        transactionId
        transactionRef
      }
      prepareDate
      salesSourceId
      shipping {
        orderUniqueAddress
        shippingInfo {
          address1
          address2
          carrier {
            id
            name
            phone
            type
          }
          city
          contactName
          contactPhone
          country
          indications
          itemId
          location {
            alt
            lat
            lng
          }
          schedule {
            fromDate
            toDate
          }
          shippingMethod {
            id
            name
            saleChannelShippingInfo
            subTotal
            taxes
            total
          }
          shippingType
          state
        }
        tracking {
          carrier
          createDate
          delivered
          deliveredDate
          id
          packages
          trackingKey
          trackingUrl
        }
      }
      shippingEstimatedDateMin
      status
      storeConfigId
      transactionDate
      updatedAt
      vendor {
        name
        vendorId
      }
    }
  }
`;
export const updateSalesChannel = /* GraphQL */ `
  mutation UpdateSalesChannel(
    $condition: ModelSalesChannelConditionInput
    $input: UpdateSalesChannelInput!
  ) {
    updateSalesChannel(condition: $condition, input: $input) {
      account {
        activeAccount
        actualOrders
        configuration {
          key
        }
        createdAt
        id
        isVtexAccount
        maxiumMonthlyOrders
        name
        salesChannels {
          items {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      accountSalesChannelsId
      createdAt
      id
      name
      salesSource {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const updateSalesSource = /* GraphQL */ `
  mutation UpdateSalesSource(
    $condition: ModelSalesSourceConditionInput
    $input: UpdateSalesSourceInput!
  ) {
    updateSalesSource(condition: $condition, input: $input) {
      configuration {
        key
      }
      createdAt
      downloadOrders
      id
      salesChannel {
        account {
          activeAccount
          actualOrders
          configuration {
            key
          }
          createdAt
          id
          isVtexAccount
          maxiumMonthlyOrders
          name
          salesChannels {
            items {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        accountSalesChannelsId
        createdAt
        id
        name
        salesSource {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        type
        updatedAt
      }
      salesChannelSalesSourceId
      salesSourceStoreConfigId
      storeConfig {
        batchInterval
        capacityManagement
        createdAt
        general {
          address
          addressComplement
          changePricesReasons {
            id
            name
          }
          city
          contactInformation {
            email
            name
            phone
          }
          country
          deliveryWindow {
            finalHour
            initialHour
            name
            weekDay
          }
          location {
            latitude
            longitude
          }
          measurementUnit
          name
          replacementReasons {
            id
            name
          }
          state
        }
        globalOrders
        id
        isActive
        localOrders
        packages {
          description
          id
          name
          price
          quantity
          type
        }
        packingPath
        preparationTime
        salesSources {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        timezone {
          offset
          value
        }
        updatedAt
      }
      storeConfigSalesSourcesId
      type
      updatedAt
      warehouseId
      warehouseName
    }
  }
`;
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $condition: ModelServiceConditionInput
    $input: UpdateServiceInput!
  ) {
    updateService(condition: $condition, input: $input) {
      agent {
        email
        id
        identification
        name
        phone
        vehicle
      }
      carrierId
      carrierLogo
      carrierName
      carrierServiceType
      comments
      createdAt
      evidences {
        author
        content
        date
        type
      }
      id
      labels {
        id
        name
        type
        url
      }
      metaData
      notes {
        author
        content
        date
        type
      }
      orderId
      packages {
        description
        dimensions {
          height
          length
          width
        }
        envelope
        id
        items {
          ean
          id
          image
          name
          price
          quantity
          refId
          type
          weight
        }
        orderId
        totalValue
        weight
      }
      paymentMethod
      rating
      receiver {
        address
        addressComplement
        city
        contactName
        country
        deliveryDate
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        identification
        location {
          latitude
          longitude
        }
        name
        phone
        state
        zipCode
      }
      seller
      sender {
        address
        addressComplement
        city
        country
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        location {
          latitude
          longitude
        }
        name
        phone
        pickupDate
        state
        zipCode
      }
      serviceId
      shippingEstimatedDate
      shippingPrice
      status
      timeline {
        items {
          author
          createdAt
          date
          description
          id
          metaData
          serviceID
          type
          updatedAt
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      totalDistanceTraveled
      trackingUrl
      type
      updatedAt
    }
  }
`;
export const updateStoreConfig = /* GraphQL */ `
  mutation UpdateStoreConfig(
    $condition: ModelStoreConfigConditionInput
    $input: UpdateStoreConfigInput!
  ) {
    updateStoreConfig(condition: $condition, input: $input) {
      batchInterval
      capacityManagement
      createdAt
      general {
        address
        addressComplement
        changePricesReasons {
          id
          name
        }
        city
        contactInformation {
          email
          name
          phone
        }
        country
        deliveryWindow {
          finalHour
          initialHour
          name
          weekDay
        }
        location {
          latitude
          longitude
        }
        measurementUnit
        name
        replacementReasons {
          id
          name
        }
        state
      }
      globalOrders
      id
      isActive
      localOrders
      packages {
        description
        id
        name
        price
        quantity
        type
      }
      packingPath
      preparationTime
      salesSources {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      updatedAt
    }
  }
`;
export const updateTrackingTimeline = /* GraphQL */ `
  mutation UpdateTrackingTimeline(
    $condition: ModelTrackingTimelineConditionInput
    $input: UpdateTrackingTimelineInput!
  ) {
    updateTrackingTimeline(condition: $condition, input: $input) {
      author
      createdAt
      date
      description
      id
      metaData
      serviceID
      type
      updatedAt
    }
  }
`;
export const updateWorksheet = /* GraphQL */ `
  mutation UpdateWorksheet(
    $condition: ModelWorksheetConditionInput
    $input: UpdateWorksheetInput!
  ) {
    updateWorksheet(condition: $condition, input: $input) {
      batchWorksheetsId
      categoriesIds
      createdAt
      finishedDate
      id
      items {
        ID
        categoriesId
        finalPrice
        itemAssignment {
          AssignedAt
          FinishedAt
          StartPickingAt
        }
        name
        orderSource {
          orderId
          quantity
        }
        originalPrice
        status
        temperature
        totalQuantity
      }
      ordersIds
      pickerAssignment {
        assignmentDate
        method
        pickerId
      }
      status
      totalItems
      updatedAt
    }
  }
`;
